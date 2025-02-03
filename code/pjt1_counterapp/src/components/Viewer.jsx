// import { useState } from "react"

const Viewer = (count) => {
  console.log(count.count)
  // const [count, setCount] = useState(0) // 초기값 0인 state 변수 생성 
  // // Controller 에서 count 를 고칠 거 => 불가능 , 컴포넌트끼리 데이터를 주고받으려면 Props를 이용해야 하는데, Props는 기본적으로 부모-자식 간에서 전달되기 때문
  // // 부모 - 자식 관계가 아니면 데이터를 Props로 전달해줄 수 없다 ! 

  return (
    <div>
      <p>현재 카운트 : </p>
      
      <h3>{count.count}</h3>
    </div> 
  )
}

export default Viewer 