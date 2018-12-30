import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Markdown from '../Markdown/Markdown';
import moment from 'moment';

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
    const { classes, theme, data } = this.props;

    return (
      <div className={classes.root}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}>
          {data.map((post, i) => {
            return <div key={i}>
              <amp-img
                src={post.img}
                alt={post.title}
                title={post.title}
                height={post.height || "426"}
                width={post.width || "640"}
                layout="responsive">
              </amp-img>
              <Markdown
                key={Math.random()}
                dir={theme.direction}
                className={classes.markdown}
                title={post.title}
                caption={moment(post.date).fromNow() + ' by ' + post.author}>
                {post.post}
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
