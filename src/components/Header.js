import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem:''
        }
        this.newItem = this.newItem.bind(this)
    }

    newItem(e) {
        this.setState({
            newItem: e.target.value
        })
    }
    onAddItem = (e) => {
        const {addItem} = this.props
        let {newItem} = this.state
        let text = newItem.trim();
        if(e.key === 'Enter' && text){
            addItem({
                id: new Date().valueOf(),
                text,
                isComplete: false
            })
            this.setState({
                newItem:''
            })
        }
    }
    render() {
        const {newItem} = this.state
        return (
            <header className = "header">
                <h1>TODO</h1>
                <input 
                className = "new-todo"
                value={newItem}
                onChange={this.newItem}
                onKeyUp={this.onAddItem}
                />
            </header>
        );
    }
}

export default Header;