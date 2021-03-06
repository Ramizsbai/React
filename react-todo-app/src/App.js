import React from "react"
import TodoItem from "./components/TodoItem"
import todoData from "./components/todoData"


function App() {

        const  todoItem = todoData.map(item => <TodoItem key={item.id} item = {item}/>)

    return (
    <div className = "todo-list">
        {todoItem}
    </div>
    )
}

export default App