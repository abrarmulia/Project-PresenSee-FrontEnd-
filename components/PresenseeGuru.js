// src/components/PresenseeGuru.js
import React, { useState, useRef, useEffect } from 'react';

function PresenseeGuru() {
    const videoRef = useRef(null);
    const [stream, setStream] = useState(null);
    const [studentAttendance, setStudentAttendance] = useState([
    { date:'01/01/2004' ,name: 'Guru A', timein: '09:30', timeout:'16:30', statusin: 'Terlambat', statusout: 'Lembur' },
    { date:'01/01/2004' ,name: 'Guru A', timein: '09:30', timeout:'16:30', statusin: 'Terlambat', statusout: 'Lembur' },
    { date:'01/01/2004' ,name: 'Guru A', timein: '09:30', timeout:'16:30', statusin: 'Terlambat', statusout: 'Lembur' },
    { date:'01/01/2004' ,name: 'Guru A', timein: '09:30', timeout:'16:30', statusin: 'Terlambat', statusout: 'Lembur' },
    { date:'01/01/2004' ,name: 'Guru A', timein: '09:30', timeout:'16:30', statusin: 'Terlambat', statusout: 'Lembur' },
    { date:'01/01/2004' ,name: 'Guru A', timein: '09:30', timeout:'16:30', statusin: 'Terlambat', statusout: 'Lembur' },
    { date:'01/01/2004' ,name: 'Guru A', timein: '09:30', timeout:'16:30', statusin: 'Terlambat', statusout: 'Lembur' },
    { date:'01/01/2004' ,name: 'Guru A', timein: '09:30', timeout:'16:30', statusin: 'Terlambat', statusout: 'Lembur' },
    { date:'01/01/2004' ,name: 'Guru A', timein: '09:30', timeout:'16:30', statusin: 'Terlambat', statusout: 'Lembur' },
    { date:'01/01/2004' ,name: 'Guru A', timein: '09:30', timeout:'16:30', statusin: 'Terlambat', statusout: 'Lembur' },
    { date:'01/01/2004' ,name: 'Guru A', timein: '09:30', timeout:'16:30', statusin: 'Terlambat', statusout: 'Lembur' },
    { date:'01/01/2004' ,name: 'Guru A', timein: '09:30', timeout:'16:30', statusin: 'Terlambat', statusout: 'Lembur' }
    ]);
    
    return (
    <div className="flex-container">
      {/* Right side - Student Attendance Records */}
        <div className="attendance-section">
        <div className="attendance-card">
            <h2 className="attendance-title">Rekap Absensi Guru</h2>
            <div className="attendance-table-container">
            <table className="attendance-table">
            <thead>
                <tr className="bg-gray-100">
                    <th className="p-3 text-left">Tanggal</th>
                    <th className="p-3 text-left">Nama</th>
                    <th className="p-3 text-left">Waktu Masuk</th>
                    <th className="p-3 text-left">Waktu Keluar</th>
                    <th className="p-3 text-left">Keterangan Masuk</th>
                    <th className="p-3 text-left">Keterangan Keluar</th>
                </tr>
                </thead>
                <tbody>
                {studentAttendance.map((student, index) => (
                    <React.Fragment key={index}>
                    <tr className="attendance-row">
                        <td className="attendance-value">{student.date}</td>
                        <td className="attendance-value">{student.name}</td>
                        <td className="attendance-value">{student.timein}</td>
                        <td className="attendance-value">{student.timeout}</td>
                        <td className="attendance-value">{student.statusin}</td>
                        <td className="attendance-value">{student.statusout }</td>
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

export default PresenseeGuru;
