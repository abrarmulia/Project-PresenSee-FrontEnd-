// src/components/AttendanceCamera.js
import React, { useState, useRef, useEffect } from 'react';

function AttendanceCamera() {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [teacherAttendance, setTeacherAttendance] = useState([
    { name: 'Guru A', time: '07:30' },
    { name: 'Guru B', time: '07:45' },
    { name: 'Guru C', time: '08:00' }
  ]);
  const [studentAttendance, setStudentAttendance] = useState([
    { name: 'Siswa A', time: '07:30' },
    { name: 'Siswa B', time: '07:35' },
    { name: 'Siswa C', time: '07:40' }
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

      {/* Right side - Attendance Records */}
      <div className="attendance-section">
        {/* Teacher Attendance */}
        <div className="attendance-card">
          <h2 className="attendance-title">Rekap Absensi Guru</h2>
          <div className="attendance-list">
            {teacherAttendance.map((teacher, index) => (
              <div key={index} className="attendance-item">
                <span className="item-number">{index + 1}.</span>
                <span className="item-number">{teacher.name} - {teacher.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Student Attendance */}
        <div className="attendance-card">
          <h2 className="attendance-title">Rekap Absensi Siswa</h2>
          <div className="attendance-list">
            {studentAttendance.map((student, index) => (
              <div key={index} className="attendance-item">
                <span className="item-number">{index + 1}.</span>
                <span className="item-number">{student.name} - {student.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceCamera;
