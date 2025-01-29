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
    <div className="flex h-screen bg-gray-100">
      {/* Left side - Camera */}
      <div className="w-1/2 p-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Live Camera</h2>
          <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right side - Attendance Records */}
      <div className="w-1/2 p-6 space-y-6">
        {/* Teacher Attendance */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Rekap Absensi Guru</h2>
          <div className="space-y-2">
            {teacherAttendance.map((teacher, index) => (
              <div key={index} className="flex items-center">
                <span className="mr-2">{index + 1}.</span>
                <span className="flex-1">{teacher.name} - {teacher.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Student Attendance */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Rekap Absensi Siswa</h2>
          <div className="space-y-2">
            {studentAttendance.map((student, index) => (
              <div key={index} className="flex items-center">
                <span className="mr-2">{index + 1}.</span>
                <span className="flex-1">{student.name} - {student.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceCamera;