import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Hello world
class Hello extends Component {
  render() {
    var place = 'World';
    return (
      <h1>Hello {place}</h1>
    );
  }
}


ReactDOM.render(<Hello/>, document.getElementById('root'));
