import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Camera } from 'lucide-react';

const StudentDataForm = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    nama: '',
    nisn: '',
    kelas: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Date.now(),
      ...formData
    };
    setStudents(prev => [...prev, newStudent]);
    setFormData({ nama: '', nisn: '', kelas: '' });
  };

  const handleDelete = (id) => {
    setStudents(prev => prev.filter(student => student.id !== id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-sm mb-4">
        <button 
          className="w-full p-4 flex justify-between items-center text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-lg font-medium">Input Data Siswa</span>
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
        
        {isOpen && (
          <div className="p-4 border-t">
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
              <input
                type="text"
                name="nama"
                placeholder="Nama Siswa"
                value={formData.nama}
                onChange={handleInputChange}
                className="flex-1 min-w-[200px] p-2 border rounded"
              />
              <input
                type="text"
                name="nisn"
                placeholder="NISN"
                value={formData.nisn}
                onChange={handleInputChange}
                className="flex-1 min-w-[200px] p-2 border rounded"
              />
              <input
                type="text"
                name="kelas"
                placeholder="Kelas"
                value={formData.kelas}
                onChange={handleInputChange}
                className="flex-1 min-w-[200px] p-2 border rounded"
              />
              <button
                type="button"
                className="bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2"
              >
                <Camera className="w-5 h-5" />
                Camera
              </button>
            </form>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-lg font-medium mb-4">Data Siswa</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 text-left">No.</th>
                <th className="p-3 text-left">Nama</th>
                <th className="p-3 text-left">NISN</th>
                <th className="p-3 text-left">Kelas</th>
                <th className="p-3 text-left">Foto</th>
                <th className="p-3 text-left">Hapus</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.id} className="border-t">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{student.nama}</td>
                  <td className="p-3">{student.nisn}</td>
                  <td className="p-3">{student.kelas}</td>
                  <td className="p-3">-</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentDataForm;