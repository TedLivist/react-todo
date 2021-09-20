/* eslint-disable react/prop-types, react/destructuring-assignment,
jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from '../styles/TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { completed, id, title } = props.todo;

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
    editMode.display = 'block';
  } else {
    editMode.display = 'none';
    viewMode.display = 'block';
  }

  return (
    <li className={styles.item}>
      <div style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button type="button" onClick={() => props.deleteTodoProps(id)}>
          <FaTrash style={{ color: 'red', fontSize: '16px' }} />
        </button>
        <span onClick={handleEditing} style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>

      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
