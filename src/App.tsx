import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/routes';
import Template from './components/Template';

export const App = () => {
  return (
    <BrowserRouter>
      <Template>
        <MainRoutes />
      </Template>
    </BrowserRouter>
  );
};
