import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch } from "react-router-dom";

import { CssBaseline } from '@material-ui/core';

import MainPage from './MainPage';
import LoginForm from "./auth/LoginForm";
import SignupForm from "./auth/SignupForm";
import PrivateRoute from "./auth/PrivateRoute";
import ProtectedRoute from "./auth/ProtectedRoute";
import LoadingSpinner from './LoadingSpinner';
import '../styles/App.css';
import Theme from '../styles/Theme';
import { authenticateThunk } from "../store/actions/user";


export default function App() {
  const isNotLoggedIn = useSelector((state) => !state.user);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticateThunk());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <CssBaseline />
      <Theme>
        <BrowserRouter>
          <Switch>
            <ProtectedRoute path="/login" exact={true} authenticated={!isNotLoggedIn}>
              <LoginForm />
            </ProtectedRoute>
            <ProtectedRoute path="/signup" exact={true} authenticated={!isNotLoggedIn}>
              <SignupForm />
            </ProtectedRoute>
            <PrivateRoute path="/" authenticated={!isNotLoggedIn}>
              <MainPage />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </Theme>
    </>
  );
}
