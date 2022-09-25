import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul className="Menu">
        <li onClick={() => navigate(-1)}>Geri</li>
        <li>
          <NavLink to="/">Anasayfa </NavLink>
        </li>
        <li>
          <NavLink to="/users">Kullanıcılar </NavLink>
        </li>
        <li>
          <NavLink to="/contact">İletişim </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Menu;
