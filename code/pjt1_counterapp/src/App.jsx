import { useState, useEffect, useRef } from "react"
import "./App.css"
import Controller from './components/Controller'
import Viewer from './components/Viewer'
import Even from "./components/Even"


function App() {

  const [count, setCount] = useState(0)
  const [input, setInput] = useState("")

  // 모든 react component는 lifecycle 을 가진다. 
  // 1. Mount : 탄생 
  useEffect(() => {
    console.log("mount")
  }, []) // 빈 배열로 useEffect를 사용하면 mount 시점에 할 일을 정해줄 수 있다. 
  
  // 2. Update : 변화, 리렌더링 
  const isMount = useRef(false) 

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true
      return // 뒤에 빈 배열이라 해도 마운트 시점에는 작동하지 않으니까 update 
    }
    console.log("update")
  })

  // 3. UnMount : 죽음 

  useEffect(() => {
    console.log("count : ", count ,  "/ input : ", input)
  } , [count, input]) 
  // useEffect를 사용하면 뒤 배열([count, input])이 바뀔 때마다 콜백 함수가 호출된다  
  // 그래서 뒤 배열을 '의존성 배열'(dependency array)라 한다. 줄여서 deps 
  // deps 는 여러 개일 수 있다. 

  const onClickButton = (value) => {
    setCount(count + value)
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section value={input} onChange={(event) => {
        setInput(event.target.value)
      }}>
        <input type="text" />
      </section>
      <section>
        <Viewer 
          count = {count}
        />
        {count % 2 === 0? <Even/> : null}
      </section>
      <section>
        <Controller 
          onClickButton={onClickButton}
        /> 
      </section>
    </div>
  )
}

export default App
