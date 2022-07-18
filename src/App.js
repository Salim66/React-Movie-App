import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      movieName: "Fast X",
    }
  }
  render(){
    return (
      <div className="App">
        <h1>Welcome To ThereSixtyDegree</h1>
        <p>My favorite movie is { this.state.movieName }</p>
        <button onClick={ () => {
          this.setState({ movieName: "Fast 11" });
        } }>Fast 11</button>
        <button onClick={ () => {
          this.setState({ movieName: "Fast 9" });
        } }>Fast 9</button>
      </div>
    );
  }
}

export default App;
