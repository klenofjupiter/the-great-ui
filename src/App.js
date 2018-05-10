import React, { Component } from 'react';
import ChartMaker from './Chartmaker.js';
import DummyChart from './DummyChart';
import './App.css';

const initialState = {
      filters: ['gender', 'race', 'level'],
      pivot: '', 
      'x': '', 
      'y': '', 
      renderChart: false,
      chartList: {},
      // dummy: true,
    }


// to do: add remove chart functionality 
class App extends Component {
  constructor() {
    super();
    this.state = initialState
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.removeChart = this.removeChart.bind(this);
    this.hideDummy = this.hideDummy.bind(this);
  }

  onSubmit(evt) {
    evt.preventDefault();
    let newChart = {
      pivot: this.state.pivot,
      x: this.state.x, 
      y: this.state.y
    }
    if ((newChart.pivot === newChart.x) || (newChart.pivot === newChart.y) || (newChart.x === newChart.y) || (!newChart.pivot || !newChart.x || !newChart.y)){
      console.log('invalid selection, each axis must be selected and unique')
    }else{
      console.log('all selections valid')
     let name = Object.keys(this.state.chartList).length+"";
     this.setState({renderChart: true, chartList: {...this.state.chartList, [name] : newChart}})
    }
  }
  onChange(evt) {
    this.setState({[evt.target.name] : evt.target.value})
  }

  clearAll(evt) {
    this.setState({...initialState})
  }

  removeChart(key){
    let cleanList = {}
    for (let chart in this.state.chartList){
      if(chart !== key){
        cleanList[chart] = this.state.chartList[chart]
      }
    }
    this.setState({chartList: cleanList})
  }

  hideDummy(){
    this.setState({dummy: false})
  }
  render() {
    return (
      <div className="App">
        <h2 className="App-intro">I'm interested in...</h2>
        <form onSubmit={this.onSubmit}>
          <label>The </label>
          <select disabled={Object.keys(this.state.chartList).length ? true : false} name="pivot" onChange={this.onChange} value={this.state.pivot || 'default'}>
          <option disabled="disabled" value="default"> select pivot </option>
          { this.state.filters.map((filter) => <option key={filter} value={filter}>{filter}</option>)}
          </select> 
          <label> breakdown in </label>
          <select disabled={Object.keys(this.state.chartList).length ? true : false} name="x" onChange={this.onChange} value={this.state.x || 'default'}>
          <option disabled="disabled" value="default"> select x </option>
          { this.state.filters.map((filter) => <option key={filter} value={filter}>{filter}</option>)}
          </select>
          <label> x </label>
          <select disabled={Object.keys(this.state.chartList).length ? true : false} name="y" onChange={this.onChange} value={this.state.y || 'default'}>
          <option disabled="disabled" value="default"> select y </option>
          { this.state.filters.map((filter) => <option key={filter} value={filter}>{filter}</option>)}
          </select>
          <button type="submit">add chart!</button> <button onClick={this.clearAll}> clear all </button>
        </form>
        {this.state.renderChart && Object.keys(this.state.chartList).map((key) => <ChartMaker  name={key} key={key} filters={this.state.chartList[key]} removeChart={this.removeChart}/> )}
        {!Object.keys(this.state.chartList).length && <DummyChart />}
      </div>
    );
  }
}

export default App;
