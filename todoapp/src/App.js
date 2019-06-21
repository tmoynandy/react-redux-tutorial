import React, {Component} from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo';


class App extends Component{
  state = {
    Todos : [
      {id : 1, title : "Arrange Documents"},
      {id : 2, title : "Shop necessities"},
      {id : 3, title : "Shop cholthes"}
    ]
  }
  deleteTodo = (id)=>{
    //console.log(id);
    let todos = this.state.Todos.filter(todo=>{
      return todo.id !== id
    });
    this.setState({
      Todos : todos
    })
  }

  addTodo = (todo)=>{
    todo.id = Math.random();
    let todos = [...this.state.Todos, todo];
    this.setState({
      Todos : todos
    })
  }
  render(){
    return (
      <div className="App">
        <div><h1>My TODO app</h1></div>
        <Todos deleteTodo = {this.deleteTodo} todos = {this.state.Todos}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
  
}

export default App;
