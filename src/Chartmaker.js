import React, { Component } from 'react';
import Viz from './Viz'


//to do: add remove line functionality 

export default class Chartmaker extends Component {
  constructor(){
  	super();
  	this.state = {
  	 gender: ['women', 'men', 'all'], 
  	 race: ['black', 'indian', 'hispanic', 'asian', 'hawaiian', 'two-race', 'white', 'all'], 
  	 level: ['executive', 'middle management', 'other', 'all'], 
  	 pivot: '', 
  	 x: [], 
  	 y: '', 
  	 lines : []

  	}
  	this.onSubmit = this.onSubmit.bind(this);
  	this.XValue = this.XValue.bind(this);
  	this.YValue = this.YValue.bind(this);
  	this.changePivot = this.changePivot.bind(this);
  	this.erase = this.erase.bind(this);
    this.removeLine = this.removeLine.bind(this);
  }

  onSubmit(evt) {
  	evt.preventDefault();
    if(this.state.pivot && this.state.y && this.state.x.length){
      let line = { pivot: this.state.pivot, x: this.state.x, y: this.state.y}
      this.setState({y: "", lines: [...this.state.lines, line]})
    }
  }

  XValue(evt) {
  	if(!this.state.lines.length){
  	  if(!this.state.x.includes(evt.target.value)){
  	  	this.setState({ x: [...this.state.x, evt.target.value]})
  	  }else{
  	  	let newArr = this.state.x.filter((el) => el !== evt.target.value)
  	  	this.setState({ x: newArr})
  	  }
  	}
  }

  changePivot(evt) {
  	//for now i will freeze it for the chart, but we will give users the opportunity to change later
  	if(!this.state.lines.length){
  	 this.setState({pivot: evt.target.value})
  	}
  }
  
  YValue(evt) {
  	this.setState({y : evt.target.value})
  }

  erase(){
  	this.props.removeChart(this.props.name)
  }
  removeLine(index){
    let cleanList = []
    for (let i = 0; i < this.state.lines.length; i ++){
      if (i !== index){
        cleanList.push(this.state.lines[i]);
      }
    }
    this.setState({lines: cleanList})
  }
  render(){
    // console.log('lines to plot', this.state.lines)
  	let x = this.props.filters.x;
  	x = this.state[x].filter((el) => el !== "all") //the x axis cannot be "all" -- the d3 will render "the selected sections and the remainder"
  	let y = this.props.filters.y;
  	let pivot = this.props.filters.pivot;

 //only the y value can change between lines
//the pivot and the x value must be set for the whole chart
  	return(
  	  <div className="chart-maker">
  	  <form onSubmit={this.onSubmit}>
  	  <label> select pivot function </label>
  	  <select name="pivot" disabled={this.state.lines.length ? true : false} onChange={this.changePivot} value={this.state.pivot || "default"}>
  	   <option disabled='true' value="default">select a pivot value</option>
  	   {this.state[pivot].map((el) => <option key={el} value={el}>{el}</option>)}
  	  </select>
  	  <label> select x function </label>
  	   { x.map((el) => <div key={el}><label>{el}:</label><input value={el} type="checkbox" onChange={this.XValue} disabled={this.state.lines.length ? true : false}/></div>)}
  	  <label> select y function </label>
  	  <select name="y" onChange={this.YValue} value={this.state.y || "default"}>
  	    <option disabled='true' value="default">select a y value</option>
  	   {this.state[y].map((el) => <option key={el} value={el}>{el}</option>)}
  	  </select>
  	  <button type="submit">add line</button>
  	  </form>
  	  {this.state.lines.length ? <Viz className={"viz-" + this.props.name} lines={this.state.lines} removeLine={this.removeLine} filters={this.props.filters} pivotVal={this.state.pivot} index={this.props.name}/> : null}
  	  <button onClick={this.erase}> remove chart </button>
  	  </div> 
    )
  }
}
