import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AuthStyles from '../styles/AuthStyles';
import { signupThunk } from "../../store/actions/user";
import { Paper } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PortraitIcon from '@material-ui/icons/Portrait';
import Tooltip from '@material-ui/core/Tooltip';

export default function SignupForm() {
    const classes = AuthStyles();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(signupThunk(username, email, password));
        console.log(data);
        if (data.errors) {
            setErrors(data.errors);
        }
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
        <Container className={classes.container} component="main" maxWidth="xs" >
            <Paper className={classes.actual_paper}>
                <div className={classes.paper}>
                    <div className={classes.elephant}></div>
                    <Typography className={classes.lora} component="h1" variant="h5">
                        Klevernote
                    </Typography>
                    <Typography className={classes.remember} component="span" variant="subtitle1">
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
                                <div className={classes.create}>
                                    <Link className={classes.create_font} href="/login" variant="body2">
                                        Sign in
                                    </Link>
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <div>
                {errors ? errors.map(error => (
                    <div key={error}>{error}</div>
                )
                ) : null}
                </div>
            </Paper>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.dev}>
                        Bonnie Hardie
                        <div className={classes.icons}>
                            <Tooltip title="Bonnie's Portfolio" arrow>
                                <PortraitIcon className={classes.icon} onClick={() => window.open('https://bonniehardie.github.io./')} />
                            </Tooltip>
                            <Tooltip title="Bonnie's GitHub" arrow>
                                <GitHubIcon className={classes.icon} onClick={() => window.open('https://github.com/bonniehardie')} />
                            </Tooltip>
                            <Tooltip title="Bonnie's LinkedIn" arrow>
                                <LinkedInIcon className={classes.icon} onClick={() => window.open('https://www.linkedin.com/in/bonnie-hardie-3843a81ba/')} />
                            </Tooltip>
                        </div>
                    </div>
                    <div className={classes.dev}>
                        Cynthia Spence
                        <div className={classes.icons}>
                            <Tooltip title="Cynthia's Portfolio" arrow>
                                <PortraitIcon className={classes.icon} onClick={() => window.open('https://www.linkedin.com/in/cynthia-spence-68a226194/')} />
                            </Tooltip>
                            <Tooltip title="Cynthia's GitHub" arrow>
                                <GitHubIcon className={classes.icon} onClick={() => window.open('https://github.com/cynthiaspence7827/cynthiaspence7827.github.io')} />
                            </Tooltip>
                            <Tooltip title="Cynthia's LinkedIn" arrow>
                                <LinkedInIcon className={classes.icon} onClick={() => window.open('https://www.linkedin.com/in/cynthia-spence-68a226194/')} />
                            </Tooltip>
                        </div>
                    </div>
                    <div className={classes.dev}>
                        Harrison Higgins
                        <div className={classes.icons}>
                            <Tooltip title="Harrison's Portfolio" arrow>
                                <PortraitIcon className={classes.icon} onClick={() => window.open('https://the-harry-higgins.github.io/portfolio/')} />
                            </Tooltip>
                            <Tooltip title="Harrison's GitHub" arrow>
                                <GitHubIcon className={classes.icon} onClick={() => window.open('https://github.com/the-harry-higgins')} />
                            </Tooltip>
                            <Tooltip title="Harrison's LinkedIn" arrow>
                                <LinkedInIcon className={classes.icon} onClick={() => window.open('https://www.linkedin.com/in/harry-higgins-82a8661bb/')} />
                            </Tooltip>
                        </div>
                    </div>
                    <div className={classes.dev}>
                        Michael Shuff
                        <div className={classes.icons}>
                            <Tooltip title="Michael's Portfolio" arrow>
                                <PortraitIcon className={classes.icon} onClick={() => window.open('https://mjshuff23.github.io/')} />
                            </Tooltip>
                            <Tooltip title="Michael's GitHub" arrow>
                                <GitHubIcon className={classes.icon} onClick={() => window.open('https://github.com/mjshuff23')} />
                            </Tooltip>
                            <Tooltip title="Michael's LinkedIn" arrow>
                                <LinkedInIcon className={classes.icon} onClick={() => window.open('https://www.linkedin.com/in/michael-shuff-4b7514174/')} />
                            </Tooltip>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </Container>
    );
}
