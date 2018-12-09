import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";

import Footer from '../Footer/Footer';
import styles from './styles';
import theme from './theme';
import './app.css';

class App extends Component {
  state = {
    activeTab: 'about',
  }
  handleTabChange(value) {
    this.setState({ activeTab: value });
    this.props.history.push(`/${value}`);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    const { classes, children } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div id="app" className={classes.app}>
          {children}
        </div>
        <Footer
          handleTabChange={this.handleTabChange.bind(this)}
          activeTab={this.state.activeTab} />
      </MuiThemeProvider>
    );
  }
}

export default withRouter(withStyles(styles)(App));