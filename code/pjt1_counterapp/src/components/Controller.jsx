const Controller = ({onClickButton}) => {
  // Controller 컴포넌트의 매개변수 자리에 객체 구조분해 할당을 사용해야 한다. 
  // ({onClickButton}) 은 props.onClickButton을 바로 변수로 꺼내는 문법이다. 
  // 만약 중괄호 없이 const Controller = (onClickButton) => {} 처럼 작성하면 onClickButton은 props 객체가 아니라 props 자체가 함수라고 인식되어 오류 발생 
  // props 는 객체로 전달된다 ! 
  
  return (
    <div>
      <button
        onClick={() => {
          onClickButton(-100)
        }}
      >
        -100
      </button>
      <button
      onClick={() => {
        onClickButton(-10)
      }}
      >-10</button>
      <button
      onClick={() => {
        onClickButton(-1)
      }}>-1</button>
      <button onClick={() => {
          onClickButton(+1)
        }}>+1</button>
      <button onClick={() => {
          onClickButton(+10)
        }}>+10</button>
      <button onClick={() => {
          onClickButton(+100)
        }}>+100</button>
    </div>
  )
}

export default Controller 