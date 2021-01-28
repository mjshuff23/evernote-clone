import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Paper } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import AuthStyles from '../../styles/auth/AuthStyles';
import Footer from './Footer';
import { loginThunk } from "../../store/actions/user";

const LoginForm = () => {
  const classes = AuthStyles();
  const [email, setEmail] = useState("demo@aa.io");
  const [password, setPassword] = useState("password");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(loginThunk(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };


  return (
    <div className={classes.container} component="main">
      <Paper className={classes.actual_paper}>
        <div className={classes.paper}>
          <div className={classes.elephant}></div>
          <Typography className={classes.loraBig} variant="h2">
            Klevernote
          </Typography>
          <Typography className={classes.remember} component="span" variant="subtitle1">
            Remember everything important.
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              type="text"
              value={email}
              onChange={updateEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={updatePassword}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Continue
            </Button>
            <Grid container justify="center">
              <Grid item>
                <Typography component="p" >
                  Don't have an account?
                </Typography>
              </Grid>
              <Grid item>
                <div className={classes.create}>
                  <Link className={classes.create_font} href="/signup" variant="body2" >
                    Create account
                  </Link>
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
        <div>
          {errors ? errors.map(error => (
            <div className={classes.error} key={error}>
              <Typography>{error}</Typography>
            </div>
          )
          ) : null}
        </div>
      </Paper>
      <Footer/>
    </div>
  );
};

export default LoginForm;
