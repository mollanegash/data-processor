import React from 'react';
import './App.css';
import FileUpload from './FileUpload';
import ContractList from './ContractList';

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Data Processing Application</h1>
      </div>
      <FileUpload />
      <ContractList />
    </div>
  );
}

export default App;
