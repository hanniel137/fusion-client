import React from 'react';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Configurator from './Configurator';
import Home from './Home';
import '../src/Style.css'
import AboutUs from './AboutUs';
import Login from './Login';
import Register from './Register';
import { AuthProvider } from './contexts/AuthContext';

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Home />}>
    </Route>,
    <Route path="/config" element={<Configurator />}>
    </Route>,
    <Route path="/login" element={<Login />}>
    </Route>,
    <Route path="/aboutus" element={<AboutUs />}>
    </Route>,
    <Route path="/register" element={<Register />}>
    </Route>,
])
);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
