/* eslint-disable global-require */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Markdown from '../Markdown/Markdown.blog';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { getParameterByName } from '../../utils/utils';

class PaperSheet extends React.Component {
  state = {
    activeStep: -1,
    mainActiveStep: -1,
  };

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
    const { classes, topic = 'topic', post = 'post-name' } = this.props;
    const content = require(`../../posts/${topic}/${post}.md`);
    return <Markdown className={classes.markdown} key={Math.random()}>
      {content || null}
    </Markdown>;
  }

  render() {
    const { classes } = this.props;
    const searchQueryParam = getParameterByName('q');

    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paper className={classes.root} elevation={1}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              {searchQueryParam && this.getGoogleSearchResults()}
              {!searchQueryParam && this.getPost()}
            </Grid>
          </Grid>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(PaperSheet);
