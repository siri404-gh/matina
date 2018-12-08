import React, { Component } from 'react';
import Tabs from '../Tabs/Tabs';
import pictures from '../../../../config/pictures';

class Gallery extends Component {
  render() {
    return <Tabs pictures={pictures.slice(1)} />;
  }
}

export default Gallery;
