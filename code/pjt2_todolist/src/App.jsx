import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react'
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import TodoList from './components/TodoList'
import Exam from './components/Exam'

// 더미 데이터 
// 데이터가 어떻게 존재해야 하는지 모델링 
const mokData = [
  {
    id : 0, 
    isDone : false, 
    content : "빨래하기", 
    created_at : new Date().getTime(), 
  },
  {
    id : 1, 
    isDone : false, 
    content : "청소하기", 
    created_at : new Date().getTime(), 
  }, 
  {
    id : 2, 
    isDone : false, 
    content : "React 공부하기", 
    created_at : new Date().getTime(), 
  }
]

// todos 처럼 배열 안에 객체가 들어가는 복잡한 구조의 경우, useReducer를 사용하는 게 일반적
function reducer(state, action) {
  // action 값에 따라 변화된 state의 값을 반환한다. 
  switch(action.type){
    case "CREATE" : return [...state, action.data]
    case "UPDATE" : return state.map((item) => 
      item.id === action.targetId 
      ? {...item, isDone : !item.isDone} 
      : item
    )
    case "DELETE" : return state.filter((item) => item.id !== action.targetId)
    default : return state 
  }
}

// 데이터를 하위에 있는 컴포넌트들에 보내주기 위한 context , 
// app이 실행될 때마다 reRendering될 필욘 없으니 컴포넌트 외부에서 진행한다. 
export const TodoStateContext = createContext() // 변화할 값 
export const TodoDispatchContext = createContext() // 변화하지 않을 값


function App() {
  const [todos, dispatch] = useReducer(reducer, mokData)
  // const [todos, setTodos] = useState(mokData)
  const idRef = useRef(3) // mokData와 겹치지 않게 2에서 출발 -> 원래는 0에서 출발하게 해야겠지

  // todos가 추가될 때 어떤 작업을 할지 
  // Editor에 eventHandler를 주고 TodoList 엔 todos? 배열 데이터를 줄 것
  // const onCreate = (content) => { // Editor에서 작성할 content를 받으면 , 적절한 데이터로 바꿔 주는 함수 
  //   // reducer 사용 
  //   dispatch({
  //     type : "CREATE", 
  //     data : {
  //       id : idRef.current++, 
  //       isDone : false, 
  //       content : content,
  //       created_at : new Date().getTime(), 
  //     }
  //   })

  //   // // reducer 사용 전 
  //   // const newTodo = {
  //   //   id : idRef.current++, // ref 는 객체 ! 
  //   //   isDone : false, 
  //   //   content : content, 
  //   //   created_at : new Date().getTime()
  //   // }
  //   // setTodos(todos + newTodo)
  //   // setTodos([...todos, newTodo]) // todos 뒤에 newTodo를 넣고 싶다면 
  // }

  const onCreate = useCallback((content) => { // Editor에서 작성할 content를 받으면 , 적절한 데이터로 바꿔 주는 함수 
    dispatch({
      type : "CREATE", 
      data : {
        id : idRef.current++, 
        isDone : false, 
        content : content,
        created_at : new Date().getTime(), 
      }
    })
}, [])

  // const onUpdate = (targetId) => {
  //   // reducer 사용 
  //   dispatch({
  //     type : "UPDATE", 
  //     targetId, 
  //   })

  //   // todos State 의 값들 중 
  //   // targetId와 일치하는 id값을 갖는 todo item의 isDone 속성 변경 
  //   // setTodos(todos.map((todo) => todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo))
    
  //   // // 다르게 쓸거면 
  //   // setTodos(todos.map((todo) => {
  //   //   if (todo.id === targetId) {
  //   //     return {
  //   //       ...todo, 
  //   //       isDone : !todo.isDone
  //   //     } 
  //   //   } else {
  //   //     todo
  //   //   }
  //   // }))
  // }

  const onUpdate = useCallback((targetId) => {
    // reducer 사용 
    dispatch({
      type : "UPDATE", 
      targetId, 
    })
  }, [])

  // const onDelete = (targetId) => {
  //   // reducer 사용 
  //   dispatch({
  //     type : "DELETE", 
  //     targetId, 
  //   })
  //   // // todos 배열에서 targetId와 일치하는 id를 가진 요소를 삭제한 배열을 인자로 담기 
  //   // setTodos(todos.filter((todo) => todo.id !== targetId ))
  // }

  // useCallback(()=>{}, []) // 첫 번째 인수는 최적화하고픈 함수(불필요하게 재생성되지 않게 하고픈 함수)를, 두 번째 인수로는 deps를 
  const onDelete = useCallback((targetId) => {
    dispatch({
      type : "DELETE", 
      targetId, 
    })
  }, [])

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete }
  }, []) // deps가 빈 배열, 그렇다면 이 빈 배열이 update되지 않으면 추가로 리렌더링되지 않는다. 

  return (
    <div className='App'>
      <Header />
      {/* <TodoContext.Provider value={{
        todos, onCreate, onUpdate, onDelete,
      }}> */}
      {/* context에서 상속받을 것들을 묶어놓기 */}
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <TodoList /> 
          </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
      {/* </TodoContext.Provider> */}
      {/* <Exam /> */}
    </div>
  )
}

export default App
