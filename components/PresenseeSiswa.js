// src/components/PresenseeSiswa.js
import React, { useState, useRef, useEffect } from 'react';

function PresenseeSiswa() {
    const videoRef = useRef(null);
    const [stream, setStream] = useState(null);
    const [studentAttendance, setStudentAttendance] = useState([
    { name: 'Siswa A', time: '07:30' },
    { name: 'Siswa B', time: '07:35' },
    { name: 'Siswa C', time: '07:40' },
    { name: 'Siswa D', time: '07:45' },
    { name: 'Siswa A', time: '07:30' },
    { name: 'Siswa A', time: '07:30' },
    { name: 'Siswa B', time: '07:35' },
    { name: 'Siswa C', time: '07:40' },
    { name: 'Siswa D', time: '07:45' },
    { name: 'Siswa A', time: '07:30' },
    { name: 'Siswa B', time: '07:35' },
    { name: 'Siswa C', time: '07:40' },
    { name: 'Siswa D', time: '07:45' },
    { name: 'Siswa A', time: '07:30' },
    { name: 'Siswa B', time: '07:35' },
    { name: 'Siswa C', time: '07:40' },
    { name: 'Siswa D', time: '07:45' }
    ]);

    useEffect(() => {
    startCamera();
    return () => {
        if (stream) {
        stream.getTracks().forEach(track => track.stop());
        }
    };
    }, []);

    const startCamera = async () => {
    try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user' } 
        });
        setStream(mediaStream);
        if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        }
    } catch (err) {
        console.error("Error accessing camera:", err);
    }
    };

    return (
    <div className="flex-container">
      {/* Left side - Camera */}
        <div className="camera-section">
        <div className="camera-box">
            <h2 className="camera-title">Live Camera</h2>
            <div className="video-container">
            <video
                ref={videoRef}
                autoPlay
                playsInline
                className="video-feed"
            />
            </div>
        </div>
        </div>

      {/* Right side - Student Attendance Records */}
        <div className="attendance-section">
        <div className="attendance-card-siswa">
            <h2 className="attendance-title">Rekap Absensi Siswa</h2>
            <div className="attendance-table-container-siswa">
            <table className="attendance-table-siswa">
                <thead>
                <tr className="bg-gray-100">
                    <th className="p-3 text-left">No.</th>
                    <th className="p-3 text-left">Nama</th>
                    <th className="p-3 text-left">Waktu</th>
                </tr>
                </thead>
                <tbody>
                {studentAttendance.map((student, index) => (
                    <React.Fragment key={index}>
                    <tr className="attendance-row-siswa">
                        <td className="p-3">{index + 1}</td>
                        <td className="attendance-value">{student.name}</td>
                        <td className="attendance-value">{student.time}</td>
                    </tr>
                    </React.Fragment>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    </div>
    );
}

export default PresenseeSiswa;
