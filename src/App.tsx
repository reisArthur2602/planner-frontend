import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { AuthProvider } from './context/auth/AuthContext';
import { Layout } from './components';
import { FilterProvider } from './context/filter/FilterContext';
export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <FilterProvider>
          <Layout>
            <ToastContainer
              position="top-right"
              autoClose={8000}
              theme="dark"
            />
            <AppRoutes />
          </Layout>
        </FilterProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};
