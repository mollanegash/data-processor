import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the general CSS file

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setUploadStatus('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('/api/contracts/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setUploadStatus('File uploaded successfully');
            // Optionally handle response data here
        } catch (error) {
            setUploadStatus('Error uploading file');
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div className="file-upload">
            <h2>Upload Contract File</h2>
            <input 
                type="file" 
                onChange={handleFileChange} 
                className="file-input" 
            />
            <button onClick={handleUpload} className="upload-button">Upload</button>
            {uploadStatus && <div className="upload-status">{uploadStatus}</div>}
        </div>
    );
};

export default FileUpload;
