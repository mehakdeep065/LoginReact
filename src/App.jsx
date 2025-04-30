import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Profile from './pages/Profile';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Landing/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/Signup",
      element:<Signup/> 
    },
    {
      path:"/Profile",
      element: <Profile/>
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Profile/> */}
    </>
  );
}


export default App
