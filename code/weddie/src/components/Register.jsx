import { useRef, useState } from "react"
// import { useRef } from "react"

// 회원가입 폼 만들기 
const Register = () => {
  // 모든 state를 하나의 객체로 묶어 관리하기 
  const [input, setInput] = useState({
    name : "", 
    birth : "", 
    country : "", 
    bio : "", 
  })
  // const [name, setName] = useState("")
  // const [birth, setBirth] = useState("")
  // const [country, setCountry] = useState("")
  // const [bio, setBio] = useState("")

  // // Ref 
  // const refObj = useRef(0) // ref는 state와 달리 값이 변경됐다 해서 rerendering시키지 않는다 !
  // console.log("Register가 렌더링될 때만 출력됩니다.")
  // console.log(refObj.current)

  // Ref 
  const countRef = useRef(0) 
  console.log("Register Rendering")
  const inputRef = useRef()

  // 여러 비슷한 이벤트핸들러는 통합 이벤트핸들러로 묶어줄 수 있다 
  const onChange = (event) => {
    countRef.current++ // 수정이 발생할 때마다 count
    console.log(countRef.current)
    console.log("event.target.name : ", event.target.name)
    console.log("event.target.value : ", event.target.value)
    // event.target.name :  name
    // event.target.value :  김민수
    // event.target.name :  birth
    // event.target.value :  1996-11-03
    // event.target.name :  birth
    // event.target.value :  1996-11-01
    // event.target.name :  country
    // event.target.value :  kr
    // event.target.name :  bio
    // event.target.value :  자기소개
    setInput({
      ...input, // 관련 없는 것도 함께 받아야 다른 값들이 삭제되지 않는다. 
      [event.target.name] : event.target.value
    })
  }

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소에 focus하려고 한다. 
       inputRef.current.focus()
    } 
  }

  // const onChangeName = (event) => {
  //   setInput({
  //     ...input, // 관련 없는 것도 함께 받아야 다른 값들이 안 사라진다. 
  //     name : event.target.value
  //   })
  //   // setName(event.target.value)
  // }
  
  // const onChangeBirth = (event) => {
  //   setInput({
  //     ...input, // 관련 없는 것도 함께 받아야 다른 값들이 안 사라진다. 
  //     birth : event.target.value
  //   })
  //   // setBirth(event.target.value)
  // }

  // const onChangeCountry = (event) => {
  //   setInput({
  //     ...input, // 관련 없는 것도 함께 받아야 다른 값들이 안 사라진다. 
  //     country : event.target.value 
  //   })
  //   // setCountry(event.target.value)
  // }

  // const onChangeBio = (event) => {
  //   setInput({
  //     ...input, // 관련 없는 것도 함께 받아야 다른 값들이 안 사라진다. 
  //     bio : event.target.value
  //   })
  //   // setBio(event.target.value)
  // }

  return (
    
    <div>
      <div>
        {/* <button
          onClick={() => {
            refObj.current++
            console.log(refObj.current)
          }}
        >
          ref++
        </button>
        {refObj.current} 값은 증가하는데 , rerendering되진 않기 때문에 console엔 값이 증가하나, 페이지엔 보이지 않는다. component 내에서 렌더링에 영향을 미치지 않아야 하는 변수를 생성할 때 사용한다. */}
      </div>
      <div>
        <input 
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange} 
          placeholder="이름"
        />
        {input.name}
      </div>
      
      <div>
        <input 
          name="birth"
          type="date" 
          value={input.birth}
          onChange={onChange}
        />
        {input.birth}
      </div>

      <div>
        <select 
          name="country"
          value={input.country} 
          onChange={onChange}
        >
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>

      <div>
        <textarea 
          name="bio"
          value={input.bio}
          onChange={onChange}
        />
        {input.bio}
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  )
}

export default Register