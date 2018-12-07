import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import './app.css';

// Component
import Navbar from '../Navbar/Navbar';
import Tabs from '../Tabs/Tabs';
// Config
import variables from '../../../../config/variables';
import styles from './styles';
import theme from './theme';

const {
  navbar: { title, tagline, tabs, search },
} = variables;

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div id="app" className={classes.app}>
          {/* <Navbar
            title={title}
            tagline={tagline}
            tabs={tabs}
            search={search} /> */}
          <Tabs />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default hot(module)(withStyles(styles)(App));
