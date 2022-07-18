import React, {useState, useEffect} from 'react'
import './App.css';


// IMPORTING COMPONENTS //
import Form from './components/form'
import TodoList from './components/todolist';



function App() {
 
  // STATE STUFF
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])



  // RUN ONCE on app start
  useEffect(() => {
    getLocalTodos()
  }, [])


  // USE EFFECT
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  
  /// FUNCTIONS
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break
      case 'uncompleted' :
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }



  // Save to local storage
  const saveLocalTodos = () => {
      if(todos.length > 0){localStorage.setItem('todos', JSON.stringify(todos))}
  }

  // Access local storage
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }


  return (

    <div className="App">

      <header>

      <h1>To-do List</h1>

      </header>

      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
      />

      <TodoList 
        filteredTodos={filteredTodos} 
        setTodos={setTodos} 
        todos={todos} 
      />

    </div>
  );
}

export default App;
