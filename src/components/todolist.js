import React from 'react'


/// TO-DO LIST COMPONENT ///



import Todo from './todo'
const TodoList = ({todos}) => {

   console.log(todos)
   return (
      <div className="todo-container">

      <ul className="todo-list">
         {todos.map((todo) => (
            <Todo text={todo.text} />
         ))}
      </ul>

    </div>
   )
}


export default TodoList