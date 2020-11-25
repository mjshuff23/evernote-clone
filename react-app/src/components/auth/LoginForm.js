import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { loginThunk } from "../../store/actions/user";
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onLogin = e => {
    e.preventDefault();
    dispatch(loginThunk(email, password));
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={ onLogin }>
      <div>
        { errors.map((error) => (
          <div>{ error }</div>
        )) }
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={ email }
          onChange={ updateEmail }
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={ password }
          onChange={ updatePassword }
        />
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
