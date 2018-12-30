import React, { Component } from 'react';
import Tabs from '../Tabs/Tabs';
// import Content from '../Content/Content';
import about from '../../../../config/about';

class About extends Component {
  render() {
    return <Tabs data={about} />;
  }
}

export default About;
