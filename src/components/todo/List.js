import React from "react"
import Item from "./Item"
class List extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.todos.map(todo => (
                        <Item
                            key={todo.id}
                            todo={todo}
                            handleChangeProps={this.props.handleChangeProps}
                            deleteTodoProps ={this.props.deleteTodoProps}
                        />
                    ))
                }
            </div>
        )
    }
}

export default List