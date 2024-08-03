import { Navigate, Route, Routes } from 'react-router-dom';
import { Register } from '../pages/register/Register';
import { Login } from '../pages/login/Login';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
