import React from "react";
import { Hidden } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PortraitIcon from '@material-ui/icons/Portrait';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import AuthStyles from '../styles/AuthStyles';

const Footer = () => {
  const classes = AuthStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.dev}>
        <Hidden xsDown>
          <Typography className={classes.lora}>Bonnie Hardie</Typography>
        </Hidden>
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
        <Hidden xsDown>
          <Typography className={classes.lora}>Cynthia Spence</Typography>
        </Hidden>
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
        <Hidden xsDown>
          <Typography className={classes.lora}>Harrison Higgins</Typography>
        </Hidden>
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
        <Hidden xsDown>
          <Typography component='div' className={classes.lora}>Michael Shuff</Typography>
        </Hidden>
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
    </div>
  );
}

export default Footer;