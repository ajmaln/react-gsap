import React from 'react';
import './style.css';
import TodoList from '../TodoItem';

class Todo extends React.Component {

    state = {
        value: '',
        todoList: [ 'Create GSAP Animations', 'Be Happy' ],
        selected: null,
    }

    formSubmit = (e) => {
        e.preventDefault();
        const { todoList, value } = this.state;
        if(value !== '' && !value.match(/^\s*$/)) {
            this.setState({ todoList: [...todoList, value], value: '' })
        }
    }

    onDelete = (e, index) => {
        const todoList = this.state.todoList.map((todo, indx) => indx !== index && todo)
        console.log(todoList, index)
        if(e.keyCode === 46)
        this.setState({todoList, selected: null})
    }

    render() {
        const { todoList, value } = this.state;
        return (
            <div className='todo-container'>
                <form method='post' onSubmit={this.formSubmit}>
                <div className='input-container'>
                    <input 
                        className='input-field' 
                        value={value} onChange={(e) => this.setState({value: e.target.value})} 
                        placeholder='What are you planning to do?' 
                    />
                </div>
                </form>
                <TodoList todoList={todoList} onDelete={this.onDelete} />
            </div>
        )
    }
}


export default Todo;