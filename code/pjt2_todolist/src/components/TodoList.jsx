import "./TodoList.css"
import TodoItem from "./TodoListItem"
const List = () => {

  return (
    <div className="List">
      <h3>Todo List 🌱</h3>
      <input type="text" placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  )
}

export default List 