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

  return (
    <div className='App'>
      {/* <h3>Hello {value}</h3> */}
      <h1>Todos</h1>
      <AddTodo addTodo={addTodo} />
      <TodosContext.Provider value={todos}>
        <Todos deleteTodo={deleteTodo}/>
      </TodosContext.Provider>
      {/* <UserContext.Consumer>
        {(value) => <div>Hello, {value}</div>}
      </UserContext.Consumer> */}
    </div>
  );
}

export default App;
