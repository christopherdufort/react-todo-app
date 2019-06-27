import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    todos: []    
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10').then(response  => this.setState({todos: response.data}));
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
    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  // Add todo
  addTodo = (title) => {
    axios.post('http://jsonplaceholder.typicode.com/todos',{ title:title, completed:false }).then(res => this.setState({ todos: [...this.state.todos, res.data] }));
    
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
