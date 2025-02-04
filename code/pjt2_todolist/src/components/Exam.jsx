import { useReducer } from "react"

// reducer : 변환기
function reducer(state, action) {
  console.log("state : ", state , "action : ", action)
  switch(action.type) {
    case "INCREASE" : return state + action.data
    case "DECREASE" : return state - action.data
    default : return state  
  }
  // if (action.type === "INCREASE") {
  //   return state + action.data
  // } else if (action.type === "DECREASE") {
  //   return state - action.data
  // }
}

const Exam = () => {

  // dispatch : 발송하다 
  // - 상태 변화가 있어야 한다는 사실을 알리는(발송하는) 함수
  const [state, dispatch] = useReducer(reducer, 0)

  const onClickPlus = () => {
    // 인수는 상태가 어떻게 변화하길 원하는지 넣어준다. 
    // 인수로 전달된 요청의 내용을 담고 있는 객체를 액션 객체라 한다. 
    dispatch({
      type : "INCREASE", 
      data : 1
    })
    // dispatch(state++)
  }

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE", 
      data : 1, 
    })
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  )
}

export default Exam 