# to do app (used CRUD concept)

## till I have done

- cleaned react default files
- tailwind installed
- created components **TodoForm** & **TodoList** and using them in **App.js**, also created data folder > todoData(list of objs.) and using it.
- workded on control input (state input) and form onSubmit by passing props to **TodoForm**
- created states for _inputValue_ and _todoData_ inside App.
- getting values of _inputValue_ and _todoData_ and updating it.
- I am rendering all inside **TodoList**

- new component **TodoList** is created and I am mapping overt todos inside **TodoList** and passing props to child.
- using Date.now() to adding new id fror new todo object in list
- using filter to delete clicked object by copmaring id.

- implemented checkbox complete todos by onChange on input
- for check status using todo.completed
- for handleonchangeComplete using map to define specific object in App.js

- impleneted edit and save functionality
- for edit i am using a editingId state it gets updated with current todo id. edit will be shown only when current id and todo.id doesnot match
- after edit save input and save btn will be visible based on condition after save input text value will be updated saveEditedTodo by passing current id and newinput value

- filter logic has been completed
