import React, { useState } from 'react'
import TodoRow from './TodoRow'
import Todo from './DeleteTodo'
import SearchBarComponent from './SearchBarComponent'

const TodoPage = () => {
  const [allTodos, setAllTodos] = useState([
    {
      todo: 'Learn React!',
      id: 25,
    },
  ])

  // create function that is able to add the new todo onto the existing list and display it
  // const addTodo = () => {
  // const newTodos = [...allTodos]
  // setAllTodos(newTodos)
  // }

  return (
    <div>
      <SearchBarComponent />
      <TodoRow allTodos={allTodos} setAllTodos={setAllTodos} />
      {allTodos.map(({ todo, id }) => (
        <Todo
          key={id}
          todo={todo}
        />
      ))}
    </div>
  )
}

export default TodoPage
