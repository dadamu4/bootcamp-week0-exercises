Here's the task: in the file `DESIGN.md`, write a few paragraphs describing the component structure of your app and how data will transfer between those components. Diagrams are encouraged!

<!-- 1. Breaking the user interface into different components. -->

Components:
    WholePage // the whole page (the todo including
        the nav bar)
    Nav // the navigation bar
    TodoPage // encompasses the entire page minus the navigation bar
    AddBar // next to the textbox there will be a colorbox that the user can click to
        assign a color to the todo
    SearchBar // encompasses the search bar
    TodosTable // encompasses the list of todo
    DeleteTodoButton // the button that deletes the todo. it has its own component          
        because it needs to be reused multiple times
    TodoRow // encompasses each individual todo
    ClearTodo // the button that clears all the todos

Arrange Hierarchy: 
    WholePage
        NavBar
        TodoPage
            AddBar
            SearchBar
            TodosTable
                TodoRow
                DeleteTodoButton
            ClearTodo


<!-- 2. Now that you've established which components your app will use, consider how data should flow through your application. We can break this up into a few smaller questions. -->

Each todo item should be stored as a string that has a unique id (download)

All the data is stored on the TodoPage


