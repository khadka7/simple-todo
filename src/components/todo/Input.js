import React, { Component } from "react"
class Input extends Component {
    state = {
        title: ""
    }
    onChange = e => {
        this.setState({
            //   title: e.target.value
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoItemProps(this.state.title)
        this.setState({
            title: ""
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input type="text"
                    className="input-text"
                    name="title"
                    placeholder="Add todo ...."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input type="submit" className="input-submit" />
            </form>
        )
    }
}
export default Input