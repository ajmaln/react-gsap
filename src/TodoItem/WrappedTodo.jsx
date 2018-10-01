import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import './style.css';
import TodoItem from './TodoItem';

export default ({ todoList, ...props }) => (
    <TransitionGroup component='div' className='todo-list-container'>
        {
            todoList.map((todo, key) => todo && <TodoItem index={key} key={key} todo={todo} {...props}/>).reverse()
        }
    </TransitionGroup>
)