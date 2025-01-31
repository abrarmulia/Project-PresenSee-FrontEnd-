import React, { useState, useRef } from 'react';
import { Camera } from 'lucide-react';

const Card = ({ children, className }) => {
  return <div className={` ${className}`}>{children}</div>;
};

const InputDataSiswa = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [siswaData, setSiswaData] = useState([
    { nama: 'Riyandi Mulyono, S.Pd', nisn: '123456789', kelas: 'X E.1', foto: '' },
    { nama: 'Basrial, S. Pd', nisn: '123456789', kelas: 'Guru Olahraga', foto: '' },
    { nama: 'Monika Rianti Yuskar, S.Pd', nisn: '123456789', kelas: 'X E.3', foto: '' },
  ]);

  const [formData, setFormData] = useState({ nama: '', nisn: '', kelas: '', foto: '' });

  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const toggleForm = () => setIsFormVisible(!isFormVisible);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      videoRef.current.srcObject = stream;
      streamRef.current = stream;
      setShowCamera(true);
    } catch (err) {
      console.error('Error accessing camera:', err);
      alert('Could not access camera. Please check your permissions.');
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setShowCamera(false);
  };

  const capturePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
    const photoUrl = canvas.toDataURL('image/jpeg');
    setCapturedImage(photoUrl);
    stopCamera();
  };

  const handleSubmit = () => {
    if (!formData.nama || !formData.nisn || !formData.kelas) {
      alert('Semua field harus di isi!');
      return;
    }

    setSiswaData([
      ...siswaData,
      { ...formData, foto: capturedImage || '', waktu: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) },
    ]);

    setFormData({ nama: '', nisn: '', kelas: '', foto: '' });
    setCapturedImage(null);
    setIsFormVisible(false);
  };

  const handleDelete = (index) => {
    setSiswaData(siswaData.filter((_, i) => i !== index));
  };

  return (
    <div className="container-teacher">
      {/* FORM INPUT DATA SISWA */}
      <Card>
        <div className="input-guru-card">
          <div className="input-siswa-header">
            <div className="input-guru-form" onClick={toggleForm}>
              <h2 className="text-lg font-semibold">Input Data Siswa</h2>
              <div className={`transform ${isFormVisible ? 'rotate-180' : ''}`}>▼</div>
            </div>

            {isFormVisible && (
              <div className="form-container-student">
                <input type="text" name="nama" value={formData.nama} onChange={handleInputChange} placeholder="Nama Siswa" className="input-field-student" />
                <input type="text" name="nisn" value={formData.nisn} onChange={handleInputChange} placeholder="NISN" className="input-field-student" />
                <input type="text" name="kelas" value={formData.kelas} onChange={handleInputChange} placeholder="Kelas" className="input-field-student" />

                <div className="flex items-center gap-2">
                  <button onClick={startCamera} className="camera-button-student">
                    <Camera size={20} />
                    {capturedImage ? 'Foto Telah Diambil' : 'Ambil Foto'}
                  </button>
                  {capturedImage && <img src={capturedImage} alt="Preview" className="camera-container" />}
                </div>

                <button onClick={handleSubmit} className="simpan-btn">Simpan Data</button>
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* MODAL KAMERA */}
      {showCamera && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <video ref={videoRef} autoPlay playsInline className="w-full max-w-2xl" />
            <div className="flex gap-2 mt-4">
              <button onClick={capturePhoto} className="px-4 py-2 bg-blue-500 text-white rounded">Ambil Foto</button>
              <button onClick={stopCamera} className="px-4 py-2 bg-gray-500 text-white rounded">Batal</button>
            </div>
          </div>
        </div>
      )}

      {/* TABEL DATA SISWA */}
      <Card>
        <div className="input-guru-card">
          <div className="input-guru-header">
            <h2>Data Siswa</h2>
            <div className="table-container">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left">No.</th>
                    <th className="p-3 text-left">Nama</th>
                    <th className="p-3 text-left">NISN</th>
                    <th className="p-3 text-left">Kelas</th>
                    <th className="p-3 text-left">Foto</th>
                    <th className="p-3 text-left">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {siswaData.map((siswa, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-3">{index + 1}</td>
                      <td className="p-3">{siswa.nama}</td>
                      <td className="p-3">{siswa.nisn}</td>
                      <td className="p-3">{siswa.kelas}</td>
                      <td className="p-3">{siswa.foto && <img src={siswa.foto} alt="Foto Siswa" className="w-12 h-12 rounded-full" />}</td>
                      <td className="p-3">
                        <button onClick={() => handleDelete(index)} className="hapus-btn">🗑️</button>
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

export default InputDataSiswa;
