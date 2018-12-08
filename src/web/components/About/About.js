import React, { Component } from 'react';
import Tabs from '../Tabs/Tabs';
import pictures from '../../../../config/pictures';

class About extends Component {
  render() {
    return <Tabs pictures={pictures.slice(0, 1)} />;
  }
}

export default About;
