import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner reservations',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  // Toggles completed tasks
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Deletes todo
  deleteTodo = (id) => {
    console.log("delete " + id);
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add todo
  addTodo = (title) => {
    console.log(title);
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render(){
    // Returns JSX {javascript code}
    //console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render = {props => (
              <React.Fragment>
                <AddTodo addTodo ={this.addTodo} />
                <Todos todos={this.state.todos} 
                  markComplete = {this.markComplete}
                  deleteTodo = {this.deleteTodo}
                />
              </React.Fragment>
            ) }/> 
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
