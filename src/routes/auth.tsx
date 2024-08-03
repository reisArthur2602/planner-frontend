import { Navigate, Route, Routes } from 'react-router-dom';

import Late from '../pages/late/Late';
import Task from '../pages/task/Task';
import Edit from '../pages/edit/Edit';
import Sync from '../pages/sync/Sync';
import Home from '../pages/home/Home';


export default () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Home />} />
      <Route path="/dashboard/late" element={<Late />} />
      <Route path="/dashboard/task" element={<Task />} />
      <Route path="/dashboard/task/edit/:id" element={<Edit />} />
      <Route path="/dashboard/sync" element={<Sync />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};
