import React from 'react';
import './home.css'

export default function Home() {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        <div className="image-container">
          <img src="https://bucket.cloud.lintasarta.co.id:8082/bucket01-la-cloudeka/2023/06/Fungsi-Website.jpg" alt="Gambar" />
        </div>
        <div className="text-container">
          <h1>Selamat Datang di Halaman Home</h1>
          <p>Ini adalah halaman home yang sederhana.</p>
          <p>Halaman ini hanya untuk project sederhana saja</p>
        </div>
      </div>
    </div>
  );
}
