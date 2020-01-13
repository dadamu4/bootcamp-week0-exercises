import React from 'react'
// import { ThemeProvider } from 'styled-components'
import { Switch, Route, Link } from 'react-router-dom'
import TodoPage from './TodoPage'
import HomePage from './HomePage'
import './styles.css'

const App = () => (


  <div>
    {/* <NavComponent /> */}


    <div className="navBar">
      <nav className="navHome"><Link to="/home">Home</Link></nav>
      <nav className="navTodos"><Link to="/todos">Todos</Link></nav>
    </div>


    <Switch>
      <Route path="/home">
        <HomePage />
      </Route>

      <Route path="/todos">
        <TodoPage />
      </Route>
    </Switch>

  </div>


)

export default App
