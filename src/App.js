import React, { Component } from 'react';
import ChartMaker from './Chartmaker.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filters: ['gender', 'race', 'level'],
      pivot: '', 
      'x': '', 
      'y': '', 
      renderChart: false,
      chartList: {}
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(evt) {
    evt.preventDefault();
    if(!this.state.renderChart){
      this.setState({renderChart: true})
    }
    let newChart = {
      pivot: this.state.pivot,
      x: this.state.x, 
      y: this.state.y
    }
    let name = Object.keys(this.state.chartList).length+"";

    this.setState({chartList: {...this.state.chartList, [name] : newChart}})
  }
  onChange(evt) {
    this.setState({[evt.target.name] : evt.target.value})
  }
  render() {
    console.log('state', this.state)
    return (
      <div className="App">
        <h2 className="App-intro">let's make a chart</h2>
        <form onSubmit={this.onSubmit}>
          <label>Pivot:</label>
          <select name="pivot" onChange={this.onChange}>
          { this.state.filters.map((filter) => <option key={filter} value={filter}>{filter}</option>)}
          </select>
          <label>X:</label>
          <select name="x" onChange={this.onChange}>
          { this.state.filters.map((filter) => <option key={filter} value={filter}>{filter}</option>)}
          </select>
          <label>Y:</label>
          <select name="y" onChange={this.onChange}>
          { this.state.filters.map((filter) => <option key={filter} value={filter}>{filter}</option>)}
          </select>
          <button type="submit">fire!</button>
        </form>
        {this.state.renderChart && Object.keys(this.state.chartList).map((key) => <ChartMaker name={key} key={key} filters={this.state.chartList[key]} /> )}
      </div>
    );
  }
}

export default App;
