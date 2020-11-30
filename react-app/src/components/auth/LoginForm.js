import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../store/actions/user";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AuthStyles from '../styles/AuthStyles';

const LoginForm = () => {
    const classes = AuthStyles();
    // const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("demo@aa.io");
    const [password, setPassword] = useState("password");
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
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
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Evernote
                </Typography>
                <Typography component="span" variant="subtitle1">
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
                            <Typography component="p" variant="caption">
                                Don't have an account?
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                Create account
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

export default LoginForm;
