import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Markdown from './Markdown';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    paddingBottom: 35,
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme, pictures } = this.props;

    return (
      <div className={classes.root}>
        {/* <AppBar position="static" color="default" style={{ height: 48 }}>-
        </AppBar> */}
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}>
          {pictures.map((picture, i) => {
            // const post = require(`../../${picture.route}.md`);
            return <div key={i}>
              <amp-img src={picture.img} alt={picture.topic} title={picture.topic} height="640" width="640" layout="responsive"></amp-img>
              <Markdown dir={theme.direction} className={classes.markdown} title={`${picture.topic}`} caption={'Dec 1, 2018 by Sreeram Padmanabhan'} key={picture.route.substring(0, 40)+Math.random()}>
                {`${picture.post} (${i+1}/${pictures.length}) `}
              </Markdown>
            </div>;
          })}
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
