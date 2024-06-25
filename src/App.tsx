import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/routes';

export const App = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
};
