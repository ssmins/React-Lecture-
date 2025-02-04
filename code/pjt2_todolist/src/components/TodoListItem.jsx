import { memo, useContext } from "react"
import "./TodoListItem.css"
import { TodoDispatchContext } from "../App"

const TodoListItem = ({id, isDone, content, created_at}) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext)
  
  const onChangeCheckbox = () => {
    onUpdate(id)
  }
  
  const onClickDelete = () => {
    onDelete(id)
  }
  
  return (
    <div className="TodoListItem">
      <input 
        onChange={onChangeCheckbox}
        checked={isDone} 
        type="checkbox" 
        />
      <div className="content">{content}</div>
      <div className="date">
        {new Date(created_at).toLocaleDateString()}
      </div>
      <button onClick={onClickDelete}>삭제</button>
      {/* <button onClick={onDelete({id})}>삭제</button> */}
      {/* props로 가져온 걸 바로 return 에서 쓰지 말자 .  */}
      {/* 이벤트핸들러에는 인자를 담을 수 없어  */}
      {/* onDelete({id})처럼 함수 호출 형태로 작성하면 컴포넌트가 렌더링될 때 즉시 실행된다. */}
      {/* <button onClick={() => {onDelete(id)}}>삭제</button> */}
      {/* 이렇게 작성하면 실행할 수 있음 */}
    </div>
  )
}

// // 객체 타입의 값을 props로 전달해줄 땐 제대로 된 최적화가 이뤄지지 않아서 
// // 별도의 추가 콜백함수를 전달해 일일이 props의 값이 변했는지 체크했다. 
// // 생성해놓고 비교한 후에 reRendering할지말지 결정하는 게 아니라,
// // 애초에 객체 타입의 값을 props로 전달하지 않으면 될 일 => useCallback
// // 교차 컴포넌트(HOC, Higher Order Component)
// export default memo(TodoListItem, (preProps, nextProps)=>{
//   // 반환값에 따라 props가 바뀌었는지 바뀌지 않았는지 깊게 확인
//   // True를 반환하면 props가 바뀌지 않았다 판단하고 reRendering하지 않는다 
//   if (preProps.id !== nextProps.id) return false
//   if (preProps.isDone !== nextProps.isDone) return false
//   if (preProps.content !== nextProps.content) return false
//   if (preProps.created_at !== nextProps.created_at) return false
//   return true
// }) 

export default memo(TodoListItem)