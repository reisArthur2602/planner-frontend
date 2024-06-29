import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/routes';
import Template from './components/Template';
import { TaskProvider } from './context/TaskContext';

export const App = () => {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Template>
          <MainRoutes />
        </Template>
      </TaskProvider>
    </BrowserRouter>
  );
};
