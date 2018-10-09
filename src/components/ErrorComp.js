import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

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

const ErrorComp = ({ classes }) => {

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.footerAppBar}>
        <Grid container className={classes.footerContainer}>
            <Grid item xs={12} sm={12}>
              <p className={classes.title}>
                Wrong Keyword! Please try again!
              </p>
            </Grid>

        </Grid>
      </AppBar>
    </div>
  );
}

ErrorComp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ErrorComp);

