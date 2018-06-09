import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.count = this.count.bind(this);

    this.state = { count: 0 };
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.count}></textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }

  count(e) {
    this.setState({
      count: e.target.value.length
    });
  }
}

export default App;
