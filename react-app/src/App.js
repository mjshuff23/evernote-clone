import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch } from "react-router-dom";
import MainPage from './components/MainPage';
import LoginForm from "./components/auth/LoginForm";
import PrivateRoute from "./components/auth/PrivateRoute";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { CssBaseline } from '@material-ui/core';
import Theme from './Theme';
import { authenticateThunk } from "./store/actions/user";
import './App.css';

export default function App() {
  const isNotLoggedIn = useSelector((state) => !state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticateThunk());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <Theme>
        <BrowserRouter>
          <Switch>
            <ProtectedRoute path="/login" exact={ true } authenticated={ !isNotLoggedIn }>
              <LoginForm />
            </ProtectedRoute>
            <PrivateRoute path="/" authenticated={ !isNotLoggedIn }>
              <MainPage />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </Theme>
    </>
  );
}
