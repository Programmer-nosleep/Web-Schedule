import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  return (
    <div className='w-full'>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Selamat Datang di Aplikasi Penjadwal</h1>
        <p>Silakan klik tombol di bawah untuk melihat jadwal.</p>
        <Link to="/scheduler" style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          marginTop: '20px'
        }}>
          Lihat Scheduler
        </Link>
      </div>
    </div>
  )
}

export default HomePage