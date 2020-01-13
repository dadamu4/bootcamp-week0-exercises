import React, { useState } from 'react'
import nanoid from 'nanoid'
import '../styles.css'

const TodoRow = ({ allTodos, setAllTodos }) => {
  const [todo, setTodo] = useState('')

  // make sure that if the user just presses enter, nothing will happen
  // const handleSubmit = k => {
  //   k.preventDefault()
  //   if (!todo) return
  //   addTodo(todo)
  //   setTodo('')
  // }

  return (
    <div className="todoRow">
      <input className="todoInput" type="text" placeholder=" My todo" value={todo} onChange={e => setTodo(e.target.value)} />
      <button className="addTodo" type="button" onClick={() => setAllTodos([...allTodos, { todo, id: nanoid() }])}>Add a todo</button>
      {/* // add the color dropdown menu over here  */}
    </div>
  )
}

export default TodoRow


// import React, { useState } from 'react'
// import TodoInputStyle, { ColorButton, AddButton } from './styles'


// const AddBarComponent = () => {
//   // need to probably put this in the todopage component because other components will need it
//   const todoList = []
//   const [todo, setTodo] = useState('')

//   return (
//     <div>
//       <TodoInput input type="text" placeholder=" Add a todo" value={todo} setValue={setTodo} />
//       <ColorButton>Color</ColorButton>
//       <AddButton>Add a todo!</AddButton>
//     </div>
//   )
// }


// export const TodoInput = ({ value, setValue }) => (

//   <div>
//     <h4>your todos</h4>
//     <input value={value} onChange={e => setValue(e.target.value)} />
//   </div>

// )

// export default AddBarComponent
