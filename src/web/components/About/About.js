import React, { Component } from 'react';
import Tabs from '../Tabs/Tabs';
import about from '../../../../config/about';

class About extends Component {
  render() {
    return <Tabs data={about} />;
  }
}

export default About;
