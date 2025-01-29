import React, { useState } from 'react';

// Simple Card component
const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

const InputDataGuru = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [guruData, setGuruData] = useState([
    {
      nama: 'Riyandi Mulyono, S.Pd',
      nip: '123456789',
      jabatan: 'Guru Olahraga',
      waktu: '07.24',
    },
    {
      nama: 'Basrial, S. Pd',
      nip: '123456789',
      jabatan: 'Guru Olahraga',
      waktu: '07.29',
    },
    {
      nama: 'Monika Rianti Yuskar, S.Pd',
      nip: '123456789',
      jabatan: 'Guru Olahraga',
      waktu: '07.30',
    },
  ]);

  const [formData, setFormData] = useState({
    nama: '',
    nip: '',
    jabatan: '',
    idTag: '',
  });

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.nama || !formData.nip || !formData.jabatan || !formData.idTag) {
      alert('Semua field harus di isi!');
      return;
    }
    
    setGuruData([
      ...guruData,
      { ...formData, waktu: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) },
    ]);
    setFormData({
      nama: '',
      nip: '',
      jabatan: '',
      idTag: '',
    });
    setIsFormVisible(false);
  };

  const handleDelete = (index) => {
    const newGuruData = guruData.filter((_, i) => i !== index);
    setGuruData(newGuruData);
  };

  return (
    <div className="container-teacher">
      <Card>
        <div className="input-guru-card">
          <div className="input-guru-header">
            <div 
            className="input-guru-form" 
            onClick={toggleForm}
          >
            <h2 className="">Input Data Guru</h2>
            <div className={`toggle-icon`}>
              ▼
            </div>
          </div>
          
          {isFormVisible && (
            <div className="form-container">
              <div className="input-grid">
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  placeholder="Nama Guru"
                  className="input-field"
                />
                <input
                  type="text"
                  name="nip"
                  value={formData.nip}
                  onChange={handleInputChange}
                  placeholder="NIP"
                  className="input-field"
                />
                <input
                  type="text"
                  name="jabatan"
                  value={formData.jabatan}
                  onChange={handleInputChange}
                  placeholder="Jabatan"
                  className="input-field"
                />
                <input
                  type="text"
                  name="idTag"
                  value={formData.idTag}
                  onChange={handleInputChange}
                  placeholder="ID Tag RFID"
                  className="input-field"
                />
              </div>
              <div className="button-container">
                <button
                  onClick={handleSubmit}
                  className="simpan-btn"
                >
                  SIMPAN
                </button>
              </div>
            </div>  
          )}
          </div>
        </div>
      </Card>

      <Card>
        <div className="input-guru-card">
          <div className="input-guru-header">
            <h2>Data Guru</h2>
          <div className="table-container">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left">No.</th>
                  <th className="px-4 py-2 text-left">Nama</th>
                  <th className="px-4 py-2 text-left">NIP</th>
                  <th className="px-4 py-2 text-left">Jabatan</th>
                  <th className="px-4 py-2 text-left">Waktu</th>
                  <th className="px-4 py-2 text-left">Hapus</th>
                </tr>
              </thead>
              <tbody>
                {guruData.map((guru, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{guru.nama}</td>
                    <td className="px-4 py-2">{guru.nip}</td>
                    <td className="px-4 py-2">{guru.jabatan}</td>
                    <td className="px-4 py-2">{guru.waktu}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleDelete(index)}
                        className="hapus-btn"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InputDataGuru;