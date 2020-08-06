import React from "react"
import List from "./List"
import Header from "./Header"
import Input from "./Input"
import {v4 as uuid} from "uuid"

class Conatiner extends React.Component {
    state = {
        todos: [
            {
                id: uuid(),
                title: "Name 1",
                completed: true
            },
            {
                id: uuid(),
                title: "HEllo",
                completed: false
            },
            {
                id: uuid(),
                title: "tea",
                completed: false
            },
            {
                id: uuid(),
                title: "De",
                completed: false
            }
        ]
    }
    handleChange = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        })
    }
    deleteTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id
                })
            ]
        })
    }
    addTodoItem = title => {
        const newTodo = {
            id: uuid(),
            title: title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    render() {
        return (
            <div className="container">
                <Header></Header>
                <Input
                    addTodoItemProps={this.addTodoItem}
                />
                <List
                    todos={this.state.todos}
                    handleChangeProps={this.handleChange}
                    deleteTodoProps={this.deleteTodo}
                />
            </div>
        )
    }
}
export default Conatiner