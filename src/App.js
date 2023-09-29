import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Routes/Root';
import CategoriesScreen from './Routes/CategoriesScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: 'categories',
    element: <CategoriesScreen />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
