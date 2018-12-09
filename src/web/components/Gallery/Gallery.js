import React, { Component } from 'react';
import Tabs from '../Tabs/Tabs';
import gallery from '../../../../config/gallery';

class Gallery extends Component {
  render() {
    return <Tabs data={gallery} />;
  }
}

export default Gallery;
