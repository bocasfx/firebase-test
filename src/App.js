import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { version } from '../package.json';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      response: 'Loading...'
    };
  }

  componentDidMount() {
    this.makeCall();
  }

  makeCall() {
    axios.get('https://us-central1-bocas-test.cloudfunctions.net/helloWorld')
      .then(({ data }) => {
        this.setState({
          response: data
        });
      })
      .catch(err => {
        this.setState({
          response: 'Error..'
        });
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h1>App version: {version}</h1>
          <div>{this.state.response}</div>
        </div>
      </div>
    );
  }
}

export default App;
