import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContractList.css'; // Import the CSS file for ContractList

const NAICS_OPTIONS = [
    { value: '', label: 'All NAICS Codes' },
    { value: '541511', label: '541511: Custom Computer Programming Services' },
    { value: '541512', label: '541512: Computer Systems Design Services' },
    { value: '541513', label: '541513: Computer Facilities Management Services' },
    { value: '541519', label: '541519: Other Computer Related Services' },
    { value: '541613', label: '541613: Marketing Consulting Services' },
    { value: '541690', label: '541690: Other Scientific and Technical Consulting Services' },
];

const ContractList = () => {
    const [contracts, setContracts] = useState([]);
    const [filterNaics, setFilterNaics] = useState('');
    const [sortOrder, setSortOrder] = useState('titleAsc'); // Default sorting by title ascending
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchContracts();
    }, [filterNaics, sortOrder]);

    const fetchContracts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/contracts/filter', {
                params: {
                    naics: filterNaics,
                    sortOrder: sortOrder
                }
            });
            setContracts(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const handleFilterChange = (e) => {
        setFilterNaics(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="contract-list">
            <h2>Contracts</h2>
            <div className="filter-sort">
                <select className="filter-input" onChange={handleFilterChange} value={filterNaics}>
                    {NAICS_OPTIONS.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <select className="sort-select" onChange={handleSortChange} value={sortOrder}>
                    <option value="titleAsc">Sort by Title Ascending</option>
                    <option value="titleDesc">Sort by Title Descending</option>
                    {/* Add more sorting options if needed */}
                </select>
            </div>
            <ul className="contract-table">
                {contracts.map(contract => (
                    <li key={contract.id} className="contract-item">
                        <h3>{contract.title}</h3>
                        <p>{contract.description}</p>
                        {/* Display other fields as necessary */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContractList;
