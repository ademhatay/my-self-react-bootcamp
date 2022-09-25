import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './styles.css';

const AuthLayout = () => {
  return (
    <div className="auth-container">
      <div className="auth-menu">
        <Link to="/auth/login">
          <button>Giriş Yap</button>
        </Link>
        <Link to="/auth/register">
          <button>Kayıt Ol</button>
        </Link>
      </div>
      <hr />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
