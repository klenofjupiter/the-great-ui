import React, { Component } from 'react';

export default class Viz extends Component {

  componentDidMount() {
  	//d3 rendering based on props
  }
  shouldComponentUpdate() {
  	return false;
  }

  componentWillReceiveProps() {
  	//redraw charts based on new information
  }
  render(){
  	return <svg className="viz" />
  }
}