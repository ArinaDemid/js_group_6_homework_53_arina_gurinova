import React, {Component} from 'react';
import './App.css';
import AddTaskForm from './components/addTaskForm';
import Task from './components/task';
import {FontAwesomeIcon} from '../node_modules/@fortawesome/react-fontawesome'
import {faTrashAlt} from '../node_modules/@fortawesome/fontawesome-free-solid'

class App extends Component {
  
  count = 0;
  currentTask = null;
  
  generateId = () => {
    this.count++
    return this.count;
  };
  
  state = {
    tasks: [
      {id: this.generateId(), description: 'Buy milk'},
      {id: this.generateId(), description: 'Walk with the dog'},
      {id: this.generateId(), description: 'Do homework'},
      {id: this.generateId(), description: 'Buy butter'},
      {id: this.generateId(), description: 'Wash the dog'}
    ],
    newTodoText: {id: this.generateId(), description:''}
  };
  
  removeTask = (id) => {

    const index = this.state.tasks.findIndex(p => p.id === id);
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    
    this.setState({tasks});
  };

  onChange = (event) => {
    this.currentTask = {id: this.generateId(), description: event.target.value};
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.setState(prevState => ({
      tasks: [...prevState.tasks, this.currentTask]
    }))
  }
  
  render() {
    
    let tasks = null;
    
    tasks = (
      <div> 
      {
        this.state.tasks.map((task) => {
          return (
          <Task
            key={task.id}
            description={task.description}
            remove={() => this.removeTask(task.id)}>
            <FontAwesomeIcon icon={faTrashAlt}/>
          </Task>
          )
        })
      }
      </div>
      );
      
      return (
        <div className="App">
          <AddTaskForm addTask={this.onChange} submit={this.onSubmit}/>
          {tasks}
        </div>
        );
      }
    }
    
    export default App;  
    