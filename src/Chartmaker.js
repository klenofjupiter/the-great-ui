import React, { Component } from 'react';

export default class Chartmaker extends Component {
  render(){
  	console.log('i am chart ', this.props.name, 'my props are ', this.props.filters)
  	return <div className="chart-maker" />
  }
}