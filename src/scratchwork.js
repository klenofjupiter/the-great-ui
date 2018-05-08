  	  <form>
  	  <label> select pivot function </label>
  	  <select name="pivot">
  	   {this.state[pivot].map((el) => <option key={el} value={el}>{el}</option>)}
  	  </select>
  	  <label> select x function </label>
  	  <select name="x">
  	   {this.state[x].map((el) => <option key={el} value={el}>{el}</option>)}
  	  </select>
  	  <label> select y function </label>
  	  <select name="y">
  	   {this.state[y].map((el) => <option key={el} value={el}>{el}</option>)}
  	  </select>
  	  <button type="submit">add line</button>
  	  </form>


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
     this.setState({renderChart: true, pivot: '', x: '', y:'',chartList: {...this.state.chartList, [name] : newChart}})
    }
  }