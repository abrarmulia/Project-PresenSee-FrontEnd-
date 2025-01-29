// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div>
            {/* Navbar */}  
            <nav className="top-navbar">
                <div className={`menu-toggle ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                    
                </div>
            </nav>

            {/* Sidebar */}
            <div className={`sidebar ${isActive ? 'active' : ''}`} id="sidebar">
                <div className={`close-toggle ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <div className="nav-links">
                    <Image src="Group91.png.png" className='img-navbar'/>
                    <Link to="/">Dashboard</Link>
                    <Link to="/attendance">Presensi</Link>
                    <Link to="/teachers">Data Guru</Link>
                    <Link to="/students">Data Siswa</Link>
                    <Link to="/Reports">Laporan</Link>
                    <button onClick={handleLogout} className="logout-btn">Logout</button>
                </div>
            </div>

            {/* Overlay */}
            <div className={`overlay ${isActive ? 'active' : ''}`} onClick={toggleMenu}></div>
        </div>
    );
}

export default Navbar;