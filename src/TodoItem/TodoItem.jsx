import React from 'react';
import './style.css';
import animation from '../animations';
import { Transition } from 'react-transition-group'


class TodoItem extends React.Component {

    onEnter = (e) => {
        console.log('entering', e)
        animation.show(e, () => { })
    }

    onExit = (e) => {
        console.log('exiting', e)
        animation.hide(e, () => { })
    }

    render() {
        const { todo, onDelete, index, onFocus, ...props } = this.props;
        return (
            <Transition
                onEnter={this.onEnter}
                onExit={this.onExit}
                
                timeout={550}
                tabIndex={index}
                onKeyDown={(e) => onDelete(e, index)}
                className='todo'
                unmountOnExit
                {...props}
            >
            <div>
                {todo}
            </div>
            </Transition>
        )
    }
}


export default TodoItem;