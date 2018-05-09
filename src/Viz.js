import React, { Component } from 'react';
import * as d3 from 'd3';

let dummyData = [ [.60, .20, .20], [.20, .15, .65],  [.70,  .10, .20]]

export default class Viz extends Component {
  constructor(){
  	super();
  	this.drawLines = this.drawLines.bind(this);
  }

  componentDidMount() {
  	//d3 rendering based on props
  		// console.log('prrrrops', this.props)
   this.drawLines(this.props)
  }
  shouldComponentUpdate() {
  	return false;
  }


  componentWillReceiveProps(nextProps) {
  	//redraw charts based on new information
  	d3.selectAll("svg > *").remove();
  	this.drawLines(nextProps);
  }

  drawLines(props) {
  	d3.select('.viz')
  		.attr('height', '800px')
  		.attr('width', '800px')

  		// console.log('prps lines', props.lines)
    
     props.lines.forEach((line, index) => {
    	 //draw horizontal bar overall
    	 let bar = d3.select('.viz').append('g').attr('class', index)
          bar.append('rect')
    	 	.attr('class', 'border')
    	    .attr('width', '620px')
    	 	.attr('height', '100px')
    	 	.attr('x', '10')
    	 	.attr('y' ,index * 120)
    	 	.style('stroke', 'black')
    	 	.style('fill', 'none')
    	 	.style('stroke-width', '1px')
    	 line.x.forEach((x, ind) => {
    	 	//draw each section of horizontal bar
    	 	bar.append('rect')
    	 	   .attr('width', () =>  dummyData[index][ind] * 600)
    	 	   .attr('height', '80px')
    	 	   .attr('x', () => {
    	 	   	let early = 0;
    	 	   	 for (let i = 0; i < ind; i++){
    	 	   	  early = early + (dummyData[index][i] * 600)
    	 	   	 }
    	 	   	 early += 20
    	 	   	 return early
    	 	    })
    	 	   .attr('y', (index* 120) + 10)
    	 	   .style('fill', 'none')
    	 	   .style('stroke', 'green')

    	 })
    })
  }
  render(){
  	return <svg className="viz" />
  }
}