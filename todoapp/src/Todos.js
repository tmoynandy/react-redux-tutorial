import React from 'react'

const Todos = ({todos,deleteTodo}) =>{
    const todoList = todos.map(todo=>{
        return(
            <div className="todos" key={todo.id}>
                <div>{todo.title}</div>
                <button onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
            </div>
        )
    })
    return(
        <div className="todo-list">
            {todoList}
        </div>
    )
}

export default Todos;