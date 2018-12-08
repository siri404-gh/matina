import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// import StepContent from '@material-ui/core/StepContent';
import Markdown from '../Tabs/Markdown.blog';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
// import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
const variables = require('../../../../config/variables');

import topics from '../../../../config/topics';

const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[[\]]/g, '\\$&');
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

const capitalize = word => word.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1, word.length).replace(/_/g, ' ')).join(' ');

class PaperSheet extends React.Component {
  state = {
    activeStep: -1,
    mainActiveStep: -1,
  };

  createTitle(topic, post) {
    if (post === 'home') return variables.navbar.title;
    return capitalize(topic) + ' | ' + capitalize(post) + ' | ' + variables.navbar.title;
  }

  setSeoProps(title, description) {
    const { topic, post } = this.props;
    if (post === 'home') {
      document.title = variables.navbar.title;
      document.querySelector('meta[name=\'Description\']').setAttribute('content', variables.ogDescription);
    } else {
      document.title = title;
      document.querySelector('meta[name=\'Description\']').setAttribute('content', capitalize(topic) + ' - ' + capitalize(post) + '. ' + variables.ogDescription);
    }
  }

  getGoogleSearchResults() {
    const { classes } = this.props;
    return <div>
      <Markdown className={classes.markdown} key={'search'}>
        {require(`../../posts/home/search.md`)}
      </Markdown>
      <div dangerouslySetInnerHTML={{ __html: '<gcse:searchresults-only></gcse:searchresults-only>' }} />
    </div>;
  }

  getPost() {
    const { classes, topic = 'home', post = 'home' } = this.props;
    const ppost = require(`../../posts/${topic}/${post}.md`);
    return <Markdown className={classes.markdown} key={post.substring(0, 40)}>
      {ppost || null}
    </Markdown>;
  }

  render() {
    const { classes } = this.props;
    const queryParam = getParameterByName('q');

    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paper className={classes.root} elevation={1}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              {queryParam && this.getGoogleSearchResults()}
              {!queryParam && this.getPost()}
            </Grid>
          </Grid>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(PaperSheet);
