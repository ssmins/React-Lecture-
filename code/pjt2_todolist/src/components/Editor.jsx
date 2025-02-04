import { useRef, useState, useContext } from "react"
import "./Editor.css"
import { TodoDispatchContext } from "../App"

const Editor = () => { // 객체로 전달되는 props이기에 구조분해 할당 사용
  const { onCreate } = useContext(TodoDispatchContext)

  // input 에 입력되는 content를 사용하기 위해 State로 사용 
  const [content, setContent] = useState("")
  const contentRef = useRef("")

  // eventHandler를 통해 content를 바꿔 주기 위해 
  const onChangeContent = (event) => {
    setContent(event.target.value)
  }

  // 엔터 눌러도 실행되게 
  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSubmit() 
    }
  }

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus() // 입력하고 추가 버튼 누르라고 유도
      return // 아무 것도 입력하지 않으면 전달되지 않게 
    }
    onCreate(content)
    setContent("")
    // content.current = "" // 으로 하지 않는다 ! state 수정은 무조건 setState ! 
  }

  return (
    <div className="Editor">
      <input 
        ref={contentRef}
        value={content} 
        onKeyDown={onKeyDown}
        onChange={onChangeContent} 
        type="text" 
        placeholder="새로운 todo.." 
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor