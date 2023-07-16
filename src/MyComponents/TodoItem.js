import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <>
      <h4 className='mt-3'>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
    </>
  )
}
