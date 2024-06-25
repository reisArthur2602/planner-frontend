import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard, Task, Sync } from '../pages';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/task" element={<Task />} />
      <Route path="/sync" element={<Sync />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route />
    </Routes>
  );
};

export default MainRoutes;
