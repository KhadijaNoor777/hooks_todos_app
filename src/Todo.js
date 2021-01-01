import React from 'react'

function Todo(props) {

    const getStyle = {
            color: 'black',
            textDecoration: props.todo.complete ? 'line-through' : 'none'
    }

    // const deleteNoteBtn = (e) => {
    //         e.preventDefault();
    //         deleteNote(props.note.id)
    
    //     }

    return (
        <div className='todoStyle' style={getStyle}>  
            <button onClick={()=>props.editTodo(props.todo)}><b>/</b></button>
            {props.todo.text}
            <button className='btnStyle' onClick={()=>props.deleteTodo(props.todo.id)}><b>x</b></button>
            {/* <input type='checkbox' style={{float: 'left'}}/>
            <p className='todoStyle'><b>{todo.text}</b></p> */}
        </div>
    )
}

export default Todo;
