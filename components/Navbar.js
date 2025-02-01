// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import Group91 from './Group 91.png'; // Import gambar

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
                </div>

                
                <div className="nav-links">
                    <div className="nav-links">
                    <div className={`close-toggle ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                    </div>
                    <Image
                        src={Group91} // Gunakan imported image
                        className="img-navbar"
                        alt="Logo PresenSee"
                        fluid
                    />
                    </div>    
                </div>
                <div className="navbar-tittle">
                    <Link to="/">Dashboard</Link>
                    <Link to="/attendance">Presensi</Link>
                    <Link to="/teachers">Data Guru</Link>
                    <Link to="/students">Data Siswa</Link>
                    <Link to="/Reports">Laporan</Link>
                    <Link onClick={handleLogout} className="logout-btn">Logout</Link>
                </div>
                </div>
            

            {/* Overlay */}
            <div className={`overlay ${isActive ? 'active' : ''}`} onClick={toggleMenu}></div>
        </div>
    );
}

export default Navbar;
