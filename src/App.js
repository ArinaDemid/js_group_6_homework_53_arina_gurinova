import React, {Component} from 'react';
import './App.css';
import AddTaskForm from './components/addTaskForm';
import Task from './components/task';
import {FontAwesomeIcon} from '../node_modules/@fortawesome/react-fontawesome'
import {faTrashAlt, faCheck} from '../node_modules/@fortawesome/fontawesome-free-solid'

class App extends Component {
  
  count = 0;
  currentTask = null;
  
  generateId = () => {
    this.count++
    return this.count;
  };
  
  state = {
    tasks: [
      {id: this.generateId(), description: 'Buy milk', done: false},
      {id: this.generateId(), description: 'Walk with the dog', done: false},
      {id: this.generateId(), description: 'Do homework', done: false},
      {id: this.generateId(), description: 'Buy butter', done: false},
      {id: this.generateId(), description: 'Wash the dog', done: true}
    ]
  };
  
  removeTask = id => {

    const index = this.state.tasks.findIndex(p => p.id === id);
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    
    this.setState({tasks});
  };

  doneTask = id => {
    const index = this.state.tasks.findIndex(p => p.id === id);
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    let task = this.state.tasks[index];

    tasks.done = !tasks.done;
    tasks.done ? tasks.push(task) : tasks.unshift(task);
    this.setState({tasks});  
  };

  onChange = event => {
    this.currentTask = {id: this.generateId(), description: event.target.value, done: false};
  };

  onSubmit = event => {
    event.preventDefault();

    this.setState(prevState => ({
      tasks: [...prevState.tasks, this.currentTask]
    }))
  };
  
  render() {
    
    let tasks = null;
    let todoClass = this.state.tasks.done ? "done" : "undone";

    tasks = (
      
      <div> 
      {
        this.state.tasks.map((task) => {
          
          return (
            <div className={todoClass}>
              <Task
                key={task.id}
                description={task.description}
                remove={() => this.removeTask(task.id)}
                done={() => this.doneTask(task.id)}>
                <FontAwesomeIcon icon={faCheck}/>
                <FontAwesomeIcon icon={faTrashAlt}/>
              </Task>
            </div>
          
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
    