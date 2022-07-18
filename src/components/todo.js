import React from 'react';


//// TO-DO ITEM COMPONENT ////


const Todo = ({text, todo, todos, setTodos}) => {
   /// EVENTS
   const deleteHandler = () => {
      // if clicked item id === stored id, delete it
      setTodos(todos.filter(item => item.id !== todo.id))
   }

   const completeHandler = () => {
      // if clicked item id === stored id, swap "Completed" boolean value
      setTodos(todos.map((item) => {
         if(item.id === todo.id){
            return {
               ...item, completed: !item.completed
            }
            
         }
         return item
      }))
   }

   return(
      <div className='todo'>
         <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
         <button onClick={completeHandler} className='complete-btn'><i className='fas fa-check'></i></button>
         <button onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'></i></button>
      </div>
   )
}

export default Todo