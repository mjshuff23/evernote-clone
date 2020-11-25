import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
// import SignUpForm from "./components/auth/SignUpForm";
// import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
// import User from "./components/User";
// import UsersList from "./components/UsersList";
import { authenticate } from "./services/auth";
import MainPage from './components/MainPage';
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        // setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <NavBar setAuthenticated={setAuthenticated} /> */ }
      {/* <Route path="/login" exact={ true }>
        <LoginForm
          authenticated={ authenticated }
          setAuthenticated={ setAuthenticated }
        />
      </Route> */}
      {/* <Route path="/sign-up" exact={true}>
        <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route> */}
      {/* <ProtectedRoute path="/" exact={ true } authenticated={ authenticated }> */}
        <MainPage />
      {/* </ProtectedRoute> */}
    </BrowserRouter>
  );
}

export default App;
