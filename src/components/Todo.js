import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemEdited: props.todo.text
        }
    }
    
    onItemEdited = (e) => {
        this.setState({
            itemEdited: e.target.value
        })
    }
 
    render() {
        const {todo, todoEditId, getTodoEditId, index, onConfirmEdit, onChangeStatus, onRemove} = this.props;
        const isEditing = todoEditId === todo.id;
        const {itemEdited} = this.state;
        const confirmEdit = () =>{
            onConfirmEdit({
                ...todo,
                text: itemEdited
            }, index)
        }
        return (
            <li className = {`${isEditing ? 'editing' : ''} 
                ${todo.isComplete ? 'completed' : ''}`}>
                
                {   !isEditing ?
                    <div className="view">
                        <input className="toggle" 
                        type="checkbox" 
                        checked = {todo.isComplete}
                        onChange = {() => {
                            onChangeStatus(todo, index)
                        }}
                        />
                        <label onDoubleClick = {() => getTodoEditId(todo.id)}>
                            {todo.text}
                        </label>
                        <button className="destroy"
                        onClick = {() =>{
                            onRemove(index)
                        }}/>
                    </div> :
                    <input className = "edit" 
                    type = "text" 
                    value = {itemEdited}
                    onChange = {this.onItemEdited}
                    onBlur = {confirmEdit}
                    onKeyUp = {(e) => {
                        if(e.key === 'Enter'){
                            confirmEdit()
                        }
                    }}
                    />
                }
            </li>
        );
    }
}

export default Todo;