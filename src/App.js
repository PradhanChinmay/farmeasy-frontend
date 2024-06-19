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
import RentPage from './Screen/RentPage';
import { AuthProvider } from './AuthCotext';

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
  },
  {
    path: '/:userId',
    element: <LandingHomePage />
  },
  {
    path: '/rent',
    element: <RentPage />
  }
]);

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </AuthProvider>
  );
}

export default App;
