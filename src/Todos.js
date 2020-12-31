import React, {useContext} from 'react'
import Todo from './Todo';
import {TodosContext} from './App'

function Todos({deleteTodo}) {
    const todos = useContext(TodosContext);
    return (
        <div>
            {/* <p>{todo.text}</p> */}
            {todos.map((todo) => 
                <Todo todo={todo} deleteTodo={deleteTodo} />   
            )}
        </div>
    )
}

export default Todos;
