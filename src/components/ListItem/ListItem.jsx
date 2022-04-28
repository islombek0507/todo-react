import { useRef } from "react"
// import '../../components/bootstrao.css';
export const ListItem = ({todo, allTodos, setAllTodos}) => {
  const elSpan = useRef(null);

  const handleDeleteTodo = (todoId) => {
    const filtredTodos = allTodos.filter(todo => todo.id !== todoId)

    setAllTodos(filtredTodos)
  }

  const handleEditTodos = (todo) => {
    const editText = prompt("O'zgartirish", todo.text);

    allTodos.forEach(itemTodo => {
      if (itemTodo.id === todo.id) {
        itemTodo.text = editText
        setAllTodos([...allTodos])
      }
    })
  }

  const handleComplatedTodo = (evt, todoId) => {
    allTodos.forEach(itemTodo => {
      if (itemTodo.id === todoId) {
        itemTodo.isComplated = evt.target.checked
        setAllTodos([...allTodos])
      }
    })

    if (evt.target.checked) {
      elSpan.current.style.textDecoration = 'line-through' 
    } else {
      elSpan.current.style.textDecoration = 'none' 
    }
  }

  return (
    <li className="item">
      
      <input className="chek" type="checkbox" onChange={(evt) => handleComplatedTodo(evt, todo.id)} />
      <span className="text" ref={elSpan}>{todo.text}</span>
      <button className="color btn__edit" onClick={() => handleEditTodos(todo)}>Edit</button>
      <button className="btn__edit" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
    </li>
  )
}