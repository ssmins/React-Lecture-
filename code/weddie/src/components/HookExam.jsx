import { useState } from "react"
import useInput from "../hooks/useInput"

// 1. hook은 함수 컴포넌트나 커스텀 훅 내부에서만 호출 가능  
// const state = useState() // X 
// 2. 조건부로 호출될 수 없다. 
// // 3. [핵심] 나만의 훅(Custom Hook)을 만들 수 있다. 

// // input 처럼 component 마다 반복되며 동작하는 로직이 있고 , 해당 로직이 useState 와 같이 Hook을 사용하는 로직이라면
// // 그러한 로직은 Custom Hook을 만들어서 분리할 수 있다. 
// const useInput = () => {
//   const [input, setInput] = useState("")
  
//   const onChange = (e) => {
//     setInput(e.target.value)
//   }

//   return [input, onChange]
// }

const HookExam = () => {
  const [input , onChange] = useInput()

  return (
    <div>
      <input 
        value={input}
        onChange={onChange}
      />
      {input}
    </div>
  )

}

export default HookExam 