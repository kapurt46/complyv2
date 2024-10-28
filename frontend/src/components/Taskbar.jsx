import React, { useState } from 'react';
import './Taskbar.css';
import docIcon from './assets/docicon.png';

const Taskbar = () => {
    const [documentType, setDocumentType] = useState("Select Type");
    const [industry, setIndustry] = useState("Select Industry");
    const [fileName, setFileName] = useState("");

    const handleDocumentTypeSelect = (eventKey) => {
        setDocumentType(eventKey);
    };

    const handleIndustrySelect = (eventKey) => {
        setIndustry(eventKey);
    };

    return (
        <div className="taskbar">
            {/* Left Section */}
            <div className="left-section">
                <img src={docIcon} alt="Document Icon" style={{ width: '24px', height: '24px', marginRight: '10px' }} />
                <span>COMPLY</span>
            </div>

            {/* Middle Section */}
            <div className="middle-section">
                <div className="dropdown">
                    <button className="dropbtn">Document Type: {documentType}</button>
                    <div className="dropdown-content">
                        <a onClick={() => handleDocumentTypeSelect("SOP")}>SOP</a>
                        <a onClick={() => handleDocumentTypeSelect("Deviation")}>Deviation</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Industry: {industry}</button>
                    <div className="dropdown-content">
                        <a onClick={() => handleIndustrySelect("Industry 1")}>Industry 1</a>
                        <a onClick={() => handleIndustrySelect("Industry 2")}>Industry 2</a>
                    </div>
                </div>
                <input 
                    type="text" 
                    placeholder="Change File Name" 
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)} 
                    style={{ marginLeft: '20px', padding: '5px', borderRadius: '4px' }}
                />
            </div>

            {/* Right Section */}
            <div className="right-section">
                <button onClick={() => alert('Logout')}>Logout</button>
            </div>
        </div>
    );
};

export default Taskbar;
