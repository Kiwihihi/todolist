import './App.css';
import './css/todo.css';

import Header from './components/Header';
import TodoList from './components/TodoList';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          id: 1,
          text: 'Go to Shool',
          isComplete: true
        },
        {
          id: 2,
          text: 'Learning English',
          isComplete: false
        }
      ],
      todoEditId: ''
    }
  }
  addItem = (todo = {}) => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        todo
      ]
    })
  }

  getTodoEditId = (id = '') => {
    this.setState({
      todoEditId: id
    })
  }
  onChangeStatus = (todo = {}, index) => {
    const {todoList} = this.state
      this.setState({
        todoList: [
          ...todoList.slice(0, index),
          {
            ...todo, isComplete: !todo.isComplete
          },
          ...todoList.slice(index +1)
        ]
      })
  }

  onConfirmEdit = (item = {}, index = -1) => {
    if(index >=0 ) {
      const {todoList: list } = this.state
      list.splice(index, 1, item)
      this.setState({
        todoList: list,
        todoEditId: ''
      })
    }
  }

  onRemove = (index) => {
    const {todoList: list} = this.state
    list.splice(index, 1)
    this.setState({
      todoList: list
    })
  }
  render() {

    const {todoList, todoEditId} = this.state;
    return (
      <div className="todoapp">
      <Header 
        addItem = {this.addItem}
      />
      <TodoList 
        todoList = {todoList}
        todoEditId = {todoEditId}
        getTodoEditId = {this.getTodoEditId}
        onConfirmEdit = {this.onConfirmEdit}
        onChangeStatus = {this.onChangeStatus}
        onRemove = {this.onRemove}
      />
    </div>
    );
  }
}

export default App;