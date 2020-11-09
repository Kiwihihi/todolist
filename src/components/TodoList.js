import React, { Component } from 'react';
import Todo from './Todo';
class TodoList extends Component {
    render() {
        const {todoList, todoEditId, getTodoEditId, onConfirmEdit, onChangeStatus, onRemove } = this.props;
        return (
            <section className="main">
                <input className= "toggle-all" />
                <label htmlFor="toggle-all"></label>
                <ul className= "todo-list">
                    {
                        todoList.map((todo, index) => <Todo 
                        key = {index}
                        index = {index}
                        todoEditId = {todoEditId}
                        getTodoEditId = {getTodoEditId}
                        onConfirmEdit = {onConfirmEdit}
                        onChangeStatus = {onChangeStatus}
                        onRemove = {onRemove}
                        todo = {todo}
                        {...{todo}}
                        />)
                    }
                </ul>
            </section>
        );
    }
}

export default TodoList;