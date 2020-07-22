import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Task = ({ onDelete, id, done, text, onChange }) => {

    return (<li className={classNames('list-item', { 'list-item_done': done })}>
        <input
            type="checkbox"
            className="list-item__checkbox"
            defaultChecked={done}
            onChange={() => onChange(id)}
        />
        <span className='list-item__text'>{text}</span>
        <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
    </li>)
}


Task.propTypes={
    onDelete:PropTypes.func.isRequired,
    id:PropTypes.string.isRequired,
    done:PropTypes.bool.isRequired,
    onChange:PropTypes.func.isRequired
}

export default Task