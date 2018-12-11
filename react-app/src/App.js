import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Movies from './components/movies';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {

    state = {
      counters: [
          {id: 0, value: 4},
          {id: 1, value: 0},
          {id: 2, value: 0},
          {id: 3, value: 0}
      ]
  };

  handleIncrement = counter => {
      const counters = [...this.state.counters];
      // console.log("counters array: ",JSON.stringify(counters));
      const index = counters.indexOf(counter);
      // console.log("index: ",index)
      counters[index].value ++;
      this.setState({counters});
  };

  handleDelete = counterId =>{
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters});
      console.log("event handlers %s %s", counterId,counters)
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {c.value = 0; return c;});
    this.setState({counters});
  }

  render() {
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
        {/* <Movies/> */}
        <Counters 
        onReset={this.handleReset} 
        onIncrement={this.handleIncrement} 
        onDelete={this.handleDelete} 
        counters={this.state.counters}/>
      </main>
      </React.Fragment>
    );
  }
}

export default App;
