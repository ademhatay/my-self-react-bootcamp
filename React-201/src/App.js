import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  User,
  Contact,
  UserDetail,
  Login,
  Register,
  Error404,
} from './pages';
import { DashboardLayout, AuthLayout } from './layouts';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<User />} />
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="auth" element={<AuthLayout />}>
          <Route index path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}
