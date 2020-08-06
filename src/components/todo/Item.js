import React from 'react'
class Item extends React.Component {
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#d35e0f",
            opacity: "0.8",
            textDecoration: "line-through"
        }
        const {completed,id,title} = this.props.todo
        return (
            <li className="todo-item">
                <input type="checkbox"
                    checked={completed}
                    onChange={() => this.props.handleChangeProps(id)}
                // onChange={() => { this.props.handleChangeProps(this.props.todo.id) }}
                />
                <button
                    onClick={() => this.props.deleteTodoProps(id)}
                >
                    delete
                </button>
                <span style={this.props.todo.completed ? completedStyle : null}>
                    {title}
                </span>
            </li>
        )
    }
}

export default Item