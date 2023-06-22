import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {title, id} = todo

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <div className="todo-container">
      <p className="para">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  )
}
export default TodoItem
