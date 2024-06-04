import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingHomePage from './Screen/LandingHomePage';
import LoginPage from './Screen/LoginPage';
import RegistrationPage from './Screen/RegistrationPage';
import AboutPage from './Screen/AboutPage';
import LendEquipmentPage from './Screen/LendEquipmentPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingHomePage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegistrationPage />
  },
  {
    path: '/about',
    element: <AboutPage/>
  },
  {
    path: '/lend',
    element: <LendEquipmentPage />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
