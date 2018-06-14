import React, { Component } from 'react';
import { RingLoader } from 'react-spinners';

class Loading extends Component {
  render() {
    return (
      <RingLoader color={'#123abc'} loading={true} />
    );
  }
}

export default Loading;
