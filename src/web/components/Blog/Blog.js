import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';

const {
  navbar: { title, tagline, tabs, search },
} = require('../../../../config/variables');

class Gallery extends Component {
  state = {
    mobileOpen: false,
  };
  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }
  render() {
    const { match: { params: { topic, post } } } = this.props;
    return <div>
      <Navbar
        handleDrawerToggle={this.handleDrawerToggle.bind(this)}
        title={title}
        tagline={tagline}
        tabs={tabs}
        search={search} />
      <Sidebar
        mobileOpen={this.state.mobileOpen}
        handleDrawerToggle={this.handleDrawerToggle.bind(this)} />
      <Content topic={topic} post={post}/>
    </div>;
  }
}

export default Gallery;
