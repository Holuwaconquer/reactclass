import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice';

const TodoInput = () => {
    const [text, settext] = useState('')
    const dispatch = useDispatch();

    const handleAdd = () => {
        if(text.trim() === '') return;

        dispatch(addTodo(text));
        settext('');
    }
  return (
    <div>
        <input 
            type="text" 
            value={text} 
            onChange={(e) => settext(e.target.value)} 
            placeholder='Enter todo...'
        />
        <button onClick={handleAdd} className='bg-red-700 text-white'>Add</button>
    </div>
  )
}

export default TodoInput