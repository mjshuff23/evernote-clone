import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import LoginForm from "./components/auth/LoginForm";
import PrivateRoute from "./components/auth/PrivateRoute";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import { authenticateThunk } from "./store/actions/user";
import './App.css';

function App() {
  const isNotLoggedIn = useSelector((state) => !state.user);
  const dispatch = useDispatch();
  // const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(authenticateThunk())
  }, []);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <>
      <BrowserRouter>
        <ProtectedRoute path="/login" exact={true} authenticated={!isNotLoggedIn}>
          <LoginForm />
        </ProtectedRoute>
        <PrivateRoute path="/" exact={true} authenticated={!isNotLoggedIn }>
          <MainPage />
        </PrivateRoute>
      </BrowserRouter>
    </>
  );
}

export default App;
