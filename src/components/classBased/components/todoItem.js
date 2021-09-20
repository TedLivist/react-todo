import React from 'react';
import styles from './styles/TodoItem.module.css'

class TodoItem extends React.Component {

  state = { editing: false }

  componentWillUnmount() {
    console.log("Cleaning up...")
  }
  
  handleEditing = () => {
    this.setState({
      editing: true,
    })
    console.log('Edit mode activated')
  }

  handleUpdatedDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
    console.log(event.key)
  }
  
  render() {  
    const { id, completed, title } = this.props.todo
    
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
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
          onChange={() => this.props.handleChangeProps(id)}
        />
        <button onClick={() => this.props.deleteTodoProps(id)}>
          Delete
        </button>
        <span onClick={this.handleEditing} style={completed ? completedStyle : null}>
          {title}
        </span>
        </div>

        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title} 
          onChange={e => {
            this.props.setUpdate(e.target.value, id)
          }}
          onKeyDown={this.handleUpdatedDone} />
      </li>
    )
  }
}
 
export default TodoItem;