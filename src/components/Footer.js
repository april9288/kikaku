import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    textAlign: "center",
  },
  footerAppBar: {
    background: "#355c7d"
  },
  footerContainer:{
    padding: "2rem 0 1rem 0",
    fontWeight: 600,
  },
  title:{
    fontSize: "1rem",
    color: "white",
    margin: "0.5rem 0"
  }

});

const Footer = ({ classes }) => {

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.footerAppBar}>
        <Grid container className={classes.footerContainer}>

            <Grid item xs={12} sm={12}>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/april9288/" sytle={{textDecoration: "none"}}><i className="fab fa-github-alt footerIcons"></i></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jongho-kim-b05618170/" sytle={{textDecoration: "none"}}><i className="fab fa-linkedin footerIcons"></i></a>
            </Grid>

            <Divider />

            <Grid item xs={12} sm={12}>
              <p className={classes.title}>
                &copy; 2018 James Jongho Kim All Rights Reserved
              </p>
            </Grid>

        </Grid>
      </AppBar>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);

