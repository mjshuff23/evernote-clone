import React, { useState } from 'react';
import { useDispatch } from "react-redux";
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
import { signupThunk } from "../../store/actions/user";

export default function SignupForm() {
    const classes = AuthStyles();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(signupThunk(username, email, password));
    };

    const updateusername = (e) => {
        setUsername(e.target.value);
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
                        autoComplete="fname"
                        name="username"
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        autoFocus
                        margin="normal"
                        value={username}
                        onChange={updateusername}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        type="email"
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
                                Already have an account?
                            </Typography> 
                        </Grid>
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
