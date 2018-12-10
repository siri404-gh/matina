/* eslint-disable global-require */
import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import { getParameterByName } from '../../utils/utils';
import Markdown from '../Markdown/Markdown.blog';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const {
  navbar: { title, tagline, tabs, search },
} = require('../../../../config/variables');

import topics from '../../../../config/topics';

class Gallery extends Component {
  state = {
    mobileOpen: false,
  };
  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
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
    const { classes, match: { params: { topic = 'javascript-concepts', post = 'closures' } } } = this.props;
    const content = require(`../../posts/${topic}/${post}.md`);
    return <Markdown className={classes.markdown} key={Math.random()}>
      {content || null}
    </Markdown>;
  }

  render() {
    const { match: { params: { topic, post } } } = this.props;
    const searchQueryParam = getParameterByName('q');
    return <div>
      <Navbar
        handleDrawerToggle={this.handleDrawerToggle.bind(this)}
        title={title}
        tagline={tagline}
        tabs={tabs}
        search={search} />
      <Sidebar
        mobileOpen={this.state.mobileOpen}
        handleDrawerToggle={this.handleDrawerToggle.bind(this)}
        topics={topics} topic={topic} post={post}/>
      <Content>
        {searchQueryParam && this.getGoogleSearchResults()}
        {!searchQueryParam && this.getPost()}
      </Content>
    </div>;
  }
}

export default withStyles(styles)(Gallery);
