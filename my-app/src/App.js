import React, {Component} from 'react';
//import Ninjas from './Ninjas-containerComponent';
import NinjasContainer from './Ninjas-containerComponent';
import NinjasUI from './Ninjas-uiComponent';
import NinjasConditional from './Ninjas-conditional';
import AddNinja from './AddNinja'


class App extends Component {
  state = {
    Ninjas : [
      { name : "tanumoy nandy", age : 10, id : 1},
      { name : "Monimoy Nandy", age : 18, id : 2},
      { name : "Susmita Sil", age : 22, id : 3}
    ]
  }

  //ADDING ELEMENT TO STATE

  //we will
  //1- pass this function as a props to AddNinja
  //Hence we will get access to that function
  addNinja = (ninja) =>{
    //console.log("New state object",ninja)
    ninja.id = Math.random()
    //pushing new item to array
    //1-create a copy of the array
    //push new item to array
    //set new state

    //spread operator..takes each element of the array and spreads them as individual element
    //now ninjas is a carbon copy of ninjas array of state
    //then we add the new element with a comma.i.e., "ninja"
    let ninjas = [...this.state.Ninjas, ninja]
    this.setState({
      Ninjas : ninjas
    })
  }
//will use filter to delete 
//filter returns a new array based on given condition
//if id !== ninja.id, then false return korbe and filter out, else thakbe 
  deleteNinja = (id) =>{
    //console.log(id)
    let ninjas = this.state.Ninjas.filter(ninja=>{
      return ninja.id !== id
    });
    this.setState ({
      Ninjas : ninjas
    })
  }
  render(){
    return (
      <div className="App">
        <h1>React app</h1>
        <p>Welcome</p>
        {/* <Ninjas name="tanu" age = "25"/>
        <Ninjas name="tanumoy" age = "255"/> */}
        <NinjasContainer deleteNinja = {this.deleteNinja} ninjas = {this.state.Ninjas}/>
        <NinjasUI deleteNinja = {this.deleteNinja} ninjas={this.state.Ninjas}/>
        <NinjasConditional deleteNinja = {this.deleteNinja} ninjas={this.state.Ninjas}/>
        <AddNinja  addNinja={this.addNinja}/>
      </div>
    );
  }
  
}

export default App;
