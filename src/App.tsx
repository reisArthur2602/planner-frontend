import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Layout } from './components';
import Routes from './routes';


export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <ToastContainer position="top-right" autoClose={4000} theme="dark" />
          <Routes />
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};
