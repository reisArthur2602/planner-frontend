import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { AuthProvider } from './context/auth/AuthContext';
import { Layout } from './components';
export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <ToastContainer position="top-right" autoClose={8000} theme="dark" />
          <AppRoutes />
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};
