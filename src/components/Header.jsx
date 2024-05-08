import React from 'react';
import { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [activeTab, setActiveTab] = useState('About Me');  // Default active tab

    const handleNavClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <header className="header">
            <div className="logo">
                Phil Lucafo
            </div>
            <nav className="navbar">
                {['About Me', 'Portfolio', 'Contact', 'Resume'].map(tab => (
                    <button
                        key={tab}
                        className={`nav-item ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => handleNavClick(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </nav>
        </header>
    );
};

export default Header;