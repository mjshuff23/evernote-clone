import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch } from "react-router-dom";
import MainPage from './components/MainPage';
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import PrivateRoute from "./components/auth/PrivateRoute";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SimpleBackdrop from './components/SimpleBackdrop';
import { CssBaseline } from '@material-ui/core';
import Theme from './Theme';
import { authenticateThunk } from "./store/actions/user";
import './App.css';

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
    return <SimpleBackdrop />;
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
