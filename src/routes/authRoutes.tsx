import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard, Edit, Late, Sync, Task } from '../pages';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/late" element={<Late />} />
      <Route path="/dashboard/task" element={<Task />} />
      <Route path="/dashboard/task/edit/:id" element={<Edit />} />
      <Route path="/dashboard/sync" element={<Sync />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};
