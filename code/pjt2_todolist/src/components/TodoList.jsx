import { useContext, useMemo, useState } from "react"
import "./TodoList.css"
import TodoListItem from "./TodoListItem"
import { TodoStateContext } from "../App"


const TodoList = () => {
  const todos = useContext(TodoStateContext)

  const [search, setSearch] = useState("")

  const onChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  const getFilteredData = () => {
    if (search === "") {
      return todos 
    } else {
      return todos.filter((todo) => 
        todo.content.toLowerCase().includes(search.toLowerCase()))
    } // include : 인자로 받은 내용이 들어 있는 todo.content만을 필터링함
  }

  // 보여줄 todos 를 즉각적으로 rerendering 
  const filteredTodos = getFilteredData()

  // const getAnalyzeData = () => {
    //   const totalCount = todos.length
    //   const doneCount = todos.filter((todo) => todo.isDone === true).length
    //   const notDoneCount = totalCount - doneCount
    //   return {
      //     totalCount, doneCount, notDoneCount
      //   }
      // }
  
  // const {totalCount, doneCount, notDoneCount} = getAnalyzeData() 
  const {totalCount, doneCount, notDoneCount} = useMemo(() => {
    console.log("getAnalyzeData가 실행되었습니다.") // 이게 검색 시마다 작동한다 => 불필요
    const totalCount = todos.length
    const doneCount = todos.filter((todo) => todo.isDone === true).length
    const notDoneCount = totalCount - doneCount
    return {
      totalCount, doneCount, notDoneCount
    }
  }, [todos]) 
  // useMemo() 
  // 첫 번째 인수는 콜백함수, 두 번째 인수는 의존성배열(deps)
  // 의존성배열 : useEffect(()=>{}, []) 처럼 의존성배열이 변경되었을 때만 콜백함수를 실행한다.
  // useMemo 의 첫 번째 함수에다가는 메모이제이션 하고싶은 연산을 넣어준다.


  return (
    <div className="TodoList">
      <h3>Todo List 🌱</h3>
      <div>
        <div>total : {totalCount} </div>
        <div>done : {doneCount}</div>
        <div>notDone : {notDoneCount}</div>
      </div>
      <input 
        value={search}
        onChange={onChangeSearch}
        type="text" 
        placeholder="검색어를 입력하세요" 
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoListItem key={todo.id} {...todo} /> 
        })}
      </div>
    </div>
  )
}

export default TodoList 