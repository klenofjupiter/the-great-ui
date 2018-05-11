import React, { Component } from 'react';
import * as d3 from 'd3';

export default class DummyChart extends Component {
 componentDidMount() {
  let plot;

  if(this.props.name){
    plot = d3.select(`.dummy-${this.props.name}`)
  } else {
    plot = d3.select('.dummy-chart')
  }

  plot.attr('height', '500px').attr('width', '1000px')
 
   console.log('im RUNNING and my name is', this.props.name)
 //border
   plot.append("rect")
	    .attr("x", 0)
	    .attr("y", 0)
	    .attr("height", '500px')
	    .attr("width", '900px')
	    .style("stroke", 'black')
	    .style("fill", "none")
	    .style("stroke-width", '2px');
  
  plot.append('text').attr('x', '100').attr('text-anchor', 'center').attr('y', '50')
  	   .style('font-size', '25').text('Pivot Value')

  // dummy bars
  plot.append('rect').attr('width','620').attr('height', '100')
  	   .attr('x', '150')
  	   .attr('y', '80')
  	   .style('stroke', 'black')
  	   .style('fill', 'none')
  plot.append('line')
  	   .attr('x1', '280')
  	   .attr('x2', '280')
  	   .attr('y1', '80')
  	   .attr('y2', '180') 
  	   .style('stroke', 'black')
  plot.append('text')
  	   .attr('x', '130')
  	   .attr('text-anchor', 'end')
  	   .attr('y', '140')
  	   .style('fill', 'black')
  	   .style('font-size', '15')
  	   .text('y-value')
  plot.append('text')
  	   .attr('x', '170')
  	   .attr('text-anchor', 'start')
  	   .attr('y', '170')
  	   .style('fill', 'black')
  	   .style('font-size', '15')
  	   .text('x-value')

  plot.append('rect').attr('width','620').attr('height', '100')
  	   .attr('x', '150')
  	   .attr('y', '200')
  	   .style('stroke', 'black')
  	   .style('fill', 'none')
    plot.append('line')
  	   .attr('x1', '580')
  	   .attr('x2', '580')
  	   .attr('y1', '200')
  	   .attr('y2', '300') 
  	   .style('stroke', 'black')
  plot.append('text')
  	   .attr('x', '130')
  	   .attr('text-anchor', 'end')
  	   .attr('y', '250')
  	   .style('fill', 'black')
  	   .style('font-size', '15')
  	   .text('y-value')
  plot.append('text')
  	   .attr('x', '170')
  	   .attr('text-anchor', 'start')
  	   .attr('y', '290')
  	   .style('fill', 'black')
  	   .style('font-size', '15')
  	   .text('x-value')

  plot.append('rect').attr('width','620').attr('height', '100')
  	   .attr('x', '150')
  	   .attr('y', '320')
  	   .style('stroke', 'black')
  	   .style('fill', 'none') 
      plot.append('line')
  	   .attr('x1', '390')
  	   .attr('x2', '390')
  	   .attr('y1', '320')
  	   .attr('y2', '420') 
  	   .style('stroke', 'black')
  plot.append('text')
  	   .attr('x', '130')
  	   .attr('text-anchor', 'end')
  	   .attr('y', '360')
  	   .style('fill', 'black')
  	   .style('font-size', '15')
  	   .text('y-value')
  plot.append('text')
  	   .attr('x', '170')
  	   .attr('text-anchor', 'start')
  	   .attr('y', '410')
  	   .style('fill', 'black')
  	   .style('font-size', '15')
  	   .text('x-value')
 }
 shouldComponentUpdate() {
 	return false;
 }
 render(){
   return ( <svg className={`dummy-chart dummy-${this.props.name}`} />)
 }
}