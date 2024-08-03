import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { Late } from '../pages/late/Late';
import { Task } from '../pages/task/Task';
import { Sync } from '../pages/sync/Sync';
import { Edit } from '../pages/edit/Edit';

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
