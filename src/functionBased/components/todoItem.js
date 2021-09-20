import React, { useState, useEffect } from 'react';
import styles from '../../styles/TodoItem.module.css'
import { FaTrash } from 'react-icons/fa';

const TodoItem = props => {
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    return () => {
      console.log('Cleaning up')
    }
  }, [])

  const handleEditing = () => {
    setEditing(true)
  }

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const { completed, id, title } = props.todo

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
    editMode.display = "block"
  } else {
    editMode.display = "none"
    viewMode.display = "block"
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
      <button onClick={() => props.deleteTodoProps(id)}>
        <FaTrash style={{ color: "red", fontSize: "16px" }} />
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
        onChange={e => {
          props.setUpdate(e.target.value, id)
        }}
        onKeyDown={handleUpdatedDone} />
    </li>
  )
}
 
export default TodoItem;