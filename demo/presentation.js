import React, { Component } from 'react';

import Intro from './intro';
import Game from './game';
import Slides from './slides';

export default class Presentation extends Component {

  handleStart = () => {
    this.setState({
      mode: 1,
    });
  };

  handleDone = () => {
    this.setState({
      mode: 1,
    });
  };

  handleLeave = () => {
    this.setState({
      mode: 3,
    });
  };

  constructor(props) {
    super(props);

    this.state = {
      mode: 0,
    };
  }
  render() {
    let componentToRender;
    switch (this.state.mode) {
    case 0: {
      componentToRender = <Intro onStart={this.handleStart} />;
      break;
    }
    case 1: {
      componentToRender = <Game onLeave={this.handleLeave} />;
      break;
    }
    case 3: {
      componentToRender = <Slides onDone={this.handleDone} />;
      break;
    }
    }
    return componentToRender;
  }
}
