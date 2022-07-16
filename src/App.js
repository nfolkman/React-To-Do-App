import React, {useState} from 'react'
import './App.css';


// IMPORTING COMPONENTS //
import Form from './components/form'
import TodoList from './components/todolist';



function App() {

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])

  return (

    <div className="App">

      <header>

      <h1>My To-do List {inputText}</h1>

      </header>

      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}/>

      <TodoList todos={todos} />

    </div>
  );
}

export default App;
