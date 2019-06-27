import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    // Dynamic style
    getStyle = () => {
        return {
            background: 'lightgray',
            padding:'10px',
            borderBottom: '1px black dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }


    render() {
        // Destructuring ( pull variables out )
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>{' '} 
                    {title}
                    <button onClick ={this.props.deleteTodo.bind(this, id)} style={btnStyle}>X - DELETE</button>
                </p>
            </div>
        )
    }
}
// PropTypes - Runtime type checking for React props
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem

// Example of inline style
//<div style={{backgroundColor: '#f4f4'}}>