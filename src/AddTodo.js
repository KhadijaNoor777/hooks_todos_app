import React, {useState} from 'react';
import './App.css';

function AddTodo({addTodo}) {

    const [newTodo, setNewTodo] = useState('');

    const addNewTodo = (e) => {
        e.preventDefault();
        if(!newTodo)
            return;
        addTodo(newTodo);
        setNewTodo('');
    }

    return (
        <form>
            <input type="text" placeholder="Enter todo..." value={newTodo}
             onChange={e => setNewTodo(e.target.value)} />
            <button style={addBtn} onClick={addNewTodo}>Add</button> 
        </form>
    )
}

const addBtn = {
    marginLeft:'10px',
    background:'rgb(28, 224, 28)',
    height: '20px',
    width: '50px'
}

export default AddTodo;
