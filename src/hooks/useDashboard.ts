import { useContext } from 'react';
import { DashboardContext } from '../context/dashboard/DashboardContext';

export const useDashboard = () => {
  return useContext(DashboardContext);
};
