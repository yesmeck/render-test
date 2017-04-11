import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import popup from './Popup';

class App extends Component {
  state = {
    text: 'Hello',
  }

  handleClick = () => {
    popup(this.getContent());
    setTimeout(() => {
      this.setState({ text: 'Hello world' })
    }, 1000);
  }

  getContent() {
    return <div>{this.state.text}</div>
  }

  componentDidUpdate(prevProps, prevState) {
    popup(this.getContent());
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default App;
