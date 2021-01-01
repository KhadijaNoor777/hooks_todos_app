import React, {useState, useEffect, useContext} from 'react';
import './App.css';
import {UserContext} from './index'
import Todos from './Todos'
import AddTodo from './AddTodo'

export const TodosContext = React.createContext();

function App() {

  const value = useContext(UserContext);
  const [todos, setTodos] = useState([
    {id: 1, text: 'Eat Breakfast', complete: true},
    {id: 2, text: 'Do Laundry', complete: false},
    {id: 3, text: 'Finish Project', complete: true}
  ])

  const deleteTodo = (id) => {
    //console.log(id);
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const addTodo = (todo) => {
    console.log("add todo")
    setTodos([...todos, {id: todos.length + 1, text:todo, complete:false }])
  }

  const editTodo = (etodo) => {
    console.log(etodo.text);
    etodo.complete = !etodo.complete
    console.log(etodo.complete);
    setTodos(todos.map(todo => (todo.id === etodo.id ? etodo : todo)))
    //setTodos(todos.filter(todo => todo.id !== etodo.id));
    // deleteTodo(etodo.id)
    // setTodos([...todos, {id: etodo.id, text:etodo.text, complete:!etodo.complete }])
    
  }

  return (
    <div className='App'>
      {/* <h3>Hello {value}</h3> */}
      <h1>Todos</h1>
      <AddTodo addTodo={addTodo} />
      <TodosContext.Provider value={todos}>
        <Todos editTodo={editTodo} deleteTodo={deleteTodo}/>
      </TodosContext.Provider>
      {/* <UserContext.Consumer>
        {(value) => <div>Hello, {value}</div>}
      </UserContext.Consumer> */}
    </div>
  );
}

export default App;
