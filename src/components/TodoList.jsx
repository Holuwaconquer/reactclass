import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from './todoSlice';

const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos);
    console.log(todos);
    const dispatch = useDispatch();
  return (
    <ul>
        {todos.map((todo) => (
            <li key={todo.id}>
                <h1>{todo.text}</h1>
                <span onClick={() => dispatch(deleteTodo(todo.id))}>D</span>
            </li>
        ))}
    </ul>
  )
}


export default TodoList