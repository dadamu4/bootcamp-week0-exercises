import React, { useState } from 'react'

const Todo = ({
  id, todo, allTodos, setAllTodos,
}) => (

  <div>
    <p>{todo}</p>
    <button
      className="deleteTodo"
      type="button"
      onClick={() => {
        setAllTodos(allTodos.filter(k => {
          if (id === k.id) {
            return false
          }
          return true
        }))
      }}
    >
      Delete

    </button>

  </div>


)

export default Todo
