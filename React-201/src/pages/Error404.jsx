import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Sayfa Bulunamadı</h2>
      <Link to="auth">
        <button>Giriş Sayfasına Dön</button>
      </Link>
    </div>
  );
};

export default Error404;
