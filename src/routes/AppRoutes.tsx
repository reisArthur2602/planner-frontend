import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard, Late, Login, Register, Task } from '../pages';
import { Private } from './Private';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Private><Dashboard /></Private>} />
      <Route path="/dashboard/late" element={<Private><Late /></Private>} />
      <Route path="/dashboard/task" element={<Private><Task /></Private>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
