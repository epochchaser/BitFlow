import React, { Component } from 'react';
import './App.css';
import LineChart from './components/LineChart';

class App extends Component {
  createDummyGraphData(){
    const data = []
    for (let x = 0; x <= 30; x++) {
      const random = Math.random();
      const temp = data.length > 0 ? data[data.length-1].y : 50;
      const y = random >= .45 ? temp + Math.floor(random * 20) : temp - Math.floor(random * 20);
      data.push({x,y})
    }
    return data;
  }

  render() {
    return (
      <div className="App">
        <div>Expect bitcoin price</div>
        <LineChart data={this.createDummyGraphData()}/>
      </div>
    );
  }
}

export default App;
