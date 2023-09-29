import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Home from './Routes/Home';
import CategoriesScreen from './Routes/CategoriesScreen';
import Header from './components/Header';

function Layout() {
  return <Outlet />;
}

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="categories" element={<CategoriesScreen />} />
            <Route path="*" element={<div>Page not found : (</div>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
