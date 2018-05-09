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
  	let plot = d3.select('.viz')
  				.attr('height', '800px')
  				.attr('width', '800px')

  		// console.log('prps lines', props.lines)
    let startHeight = 50;
     //"chart title" or pivot filter + pivot value
     plot.append('text')
     	 .attr('x', '200')
     	 .attr('y', '30')
     	 .style('font-size', '35')
     	 .text(props.filters.pivot + ": " + props.pivotVal)
    
     props.lines.forEach((line, index) => {
    	 //draw horizontal bar overall
    	 let bar = d3.select('.viz').append('g').attr('class', index)
          bar.append('rect')
    	 	.attr('class', 'border')
    	    .attr('width', '620px')
    	 	.attr('height', '100px')
    	 	.attr('x', '10')
    	 	.attr('y' ,startHeight + (index * 120))
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
    	 	   .attr('y', startHeight + (index * 120) + 10)
    	 	   .style('fill', chooseColor(ind))
    	 	   .style('stroke', 'white')
    	 	   .style('stroke-width', '2px')

    	 	bar.append('text')
    	 	   .attr('x', () => {
    	 	   	let early = 0;
    	 	   	 for (let i = 0; i < ind; i++){
    	 	   	  early = early + (dummyData[index][i] * 600)
    	 	   	 }
    	 	   	 early += 25
    	 	   	 return early
    	 	   }) 
    	 	   .attr('y', startHeight + (index * 120) + 80)
    	 	   .style('fill', 'white')
    	 	   .text(() => dummyData[index][ind] * 100 + "%" )

    	 })
    })
    //draw legend
     const labels = props.lines[0].x
     labels.forEach((label, index) => {
     	let legendLine = d3.select('.viz').append('g')
     	legendLine.append('rect')
     			   .attr('x', '650')
     			   .attr('y', () => startHeight + (20 + (index * 20)))
     			   .attr('height', '10px')
     			   .attr('width', '10px')
     			   .style('fill', chooseColor(index))

     	legendLine.append('text')
     			  .attr('x', '665')
     			  .attr('y', () => startHeight + (28 + (index * 20)))
     			  .text(label)
     })
  }
  render(){
  	return <svg className="viz" />
  }
}


function chooseColor(ind){
  let colors = ['#581845', '#900C34', '#C70039', '#FF5733', '#FFC300', '#36D1C4', '#F6318C']
  return colors[ind]
}