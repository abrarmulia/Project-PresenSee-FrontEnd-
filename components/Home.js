import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Updated import path

function Home() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div>
            {/* Stats Container */}
            <div className="stats-container">
                <div className="stat-card">
                    <div className="stat-title">Total Admin</div>
                    <div className="stat-value">1</div>
                </div>
                <div className="stat-card">
                    <div className="stat-title">Total Guru</div>
                    <div className="stat-value">97</div>
                </div>
                <div className="stat-card">
                    <div className="stat-title">Total Siswa</div>
                    <div className="stat-value">366</div>
                </div>
            </div>

            {/* Chart Container */}
            <div className="chart-container">
                <div className="chart-title">Statistik Kehadiran</div>
                <div className="chart">
                </div>
            </div>
        </div>
    );
}

export default Home;
