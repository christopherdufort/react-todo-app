import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { green } from 'ansi-colors';

export class TodoItem extends Component {

    // Dynamic style
    getStyle = () => {
        if(this.props.todo.completed){
            return {
                backgroundColor: 'lightgray',
                textDecoration: 'line-through'
            }
        } else {
            return {
                backgroundColor: '#f4f4',
                textDecoration: 'none'
            }
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}
// PropTypes - Runtime type checking for React props
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem

// Example of inline style
//<div style={{backgroundColor: '#f4f4'}}>