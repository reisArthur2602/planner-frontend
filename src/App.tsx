import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { AuthProvider } from './context/auth/AuthContext';
export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer position="top-right" autoClose={8000} theme="dark" />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};
