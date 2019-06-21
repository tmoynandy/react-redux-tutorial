import React, {Component} from 'react';

class AddTodo extends Component{
    state = {
        id : null,
        title : null
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state);
        this.props.addTodo(this.state)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="Title">New Todo</label>
                <input onChange={this.handleChange} type="text" id="title"></input>
                <button>Add Todo</button>
            </form>
        )
    }
    
}

export default AddTodo