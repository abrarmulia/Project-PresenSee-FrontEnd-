// Import yang dibutuhkan
import { Radius } from 'lucide-react';
import React, { useState } from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

const Reports = () => {
    const [selectedReport, setSelectedReport] = useState('Data Guru');

    const handleReportChange = (e) => {
    setSelectedReport(e.target.value);
    };

    return (
    <div style={styles.container}>
        <div style={styles.filterSection}>
        <input type="date" placeholder="Tanggal Mulai" style={styles.input} />
        <input type="date" placeholder="Tanggal Akhir" style={styles.input} />

        <select value={selectedReport} onChange={handleReportChange} style={styles.select}>
            <option value="Data Guru">Data Guru</option>
            <option value="Data Siswa">Data Siswa</option>
        </select>

        <button style={styles.downloadButton}>Download Excel</button>
        </div>

        {selectedReport === 'Data Guru' && (
        <div style={styles.dataSection}>
          <Card>
            <div className="input-guru-card">
              <div className="input-guru-header">
                <h3>Data Guru</h3>
              <table style={styles.table}>
              <thead>
                  <tr>
                    <th>No.</th>
                    <th>Nama</th>
                    <th>NIP</th>
                    <th>Jabatan</th>
                    <th>Tanggal</th>
                    <th>Waktu</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>1</td>
                    <td>Riyandi Mulyono, S.Pd</td>
                    <td>123456789</td>
                    <td>Guru Olahraga</td>
                    <td>01/01/2025</td>
                    <td>07.13</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Agus Satriadi, S.Pd</td>
                    <td>123456789</td>
                    <td>Guru Olahraga</td>
                    <td>01/01/2025</td>
                    <td>07.20</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Monika Rianti Yuskar, S.Pd</td>
                    <td>123456789</td>
                    <td>Guru Olahraga</td>
                    <td>01/01/2025</td>
                    <td>07.28</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Monika Rianti Yuskar, S.Pd</td>
                    <td>123456789</td>
                    <td>Guru Olahraga</td>
                    <td>01/01/2025</td>
                    <td>07.28</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Monika Rianti Yuskar, S.Pd</td>
                    <td>123456789</td>
                    <td>Guru Olahraga</td>
                    <td>01/01/2025</td>
                    <td>07.28</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Monika Rianti Yuskar, S.Pd</td>
                    <td>123456789</td>
                    <td>Guru Olahraga</td>
                    <td>01/01/2025</td>
                    <td>07.28</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Monika Rianti Yuskar, S.Pd</td>
                    <td>123456789</td>
                    <td>Guru Olahraga</td>
                    <td>01/01/2025</td>
                    <td>07.28</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Monika Rianti Yuskar, S.Pd</td>
                    <td>123456789</td>
                    <td>Guru Olahraga</td>
                    <td>01/01/2025</td>
                    <td>07.28</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Monika Rianti Yuskar, S.Pd</td>
                    <td>123456789</td>
                    <td>Guru Olahraga</td>
                    <td>01/01/2025</td>
                    <td>07.28</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Monika Rianti Yuskar, S.Pd</td>
                    <td>123456789</td>
                    <td>Guru Olahraga</td>
                    <td>01/01/2025</td>
                    <td>07.28</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Monika Rianti Yuskar, S.Pd</td>
                    <td>123456789</td>
                    <td>Guru Olahraga</td>
                    <td>01/01/2025</td>
                    <td>07.28</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Monika Rianti Yuskar, S.Pd</td>
                    <td>123456789</td>
                    <td>Guru Olahraga</td>
                    <td>01/01/2025</td>
                    <td>07.28</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Monika Rianti Yuskar, S.Pd</td>
                    <td>123456789</td>
                    <td>Guru Olahraga</td>
                    <td>01/01/2025</td>
                    <td>07.28</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Monika Rianti Yuskar, S.Pd</td>
                    <td>123456789</td>
                    <td>Guru Olahraga</td>
                    <td>01/01/2025</td>
                    <td>07.28</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Monika Rianti Yuskar, S.Pd</td>
                    <td>123456789</td>
                    <td>Guru Olahraga</td>
                    <td>01/01/2025</td>
                    <td>07.28</td>
                  </tr>
              </tbody>
              </table>
              </div>
            </div>
          </Card>
        </div>
        )}

      {selectedReport === 'Data Siswa' && (
        <div style={styles.dataSection}>
          <Card>
            <div className="input-guru-card">
              <div className="input-guru-header">
                <h3>Data Siswa</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Nama</th>
                <th>NISN</th>
                <th>Kelas</th>
                <th>Tanggal</th>
                <th>Waktu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Abdalul Fikri</td>
                <td>123456789</td>
                <td>XII F.7</td>
                <td>01/01/2025</td>
                <td>11.00</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Abrar Mulya</td>
                <td>123456789</td>
                <td>XII F.9</td>
                <td>01/01/2025</td>
                <td>12.00</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Abrar Mulya</td>
                <td>123456789</td>
                <td>XII F.9</td>
                <td>01/01/2025</td>
                <td>12.00</td>
              </tr>
            </tbody>
          </table>
              </div>
              
            </div>
            
          </Card>
          
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '24px',
    backgroundColor: '#fffff',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '1200px',
    marginBottom: '24px',
  },
  filterSection: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  select: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  downloadButton: {
    padding: '2px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  dataSection: {
    marginTop: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
    overFlowX: 'auto',
  },
  th: {
    backgroundColor: '#f2f2f2',
    padding: '10px',
    textAlign: 'left',
  },
  td: {
    padding: '10px',
    border: '1px solid #ddd',
  },
};

export default Reports;
