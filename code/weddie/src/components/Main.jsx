import "./Main.css"

const Main = () => {

  const user = {
    name : '김민수', 
    isLogin : true , 
  }

  if (user.isLogin) {
    return (
      <div className="logout">
        로그아웃
      </div>
  )} else {
    return <div className="login">
      로그인
    </div>
  }

  // return (
  //   user.isLogin ? <div>로그아웃</div> : <div>로그인</div>
  // )
}

export default Main 

// JSX 주의 사항 
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. ({{}}와 같다?)
// 2. 숫자, 문자열, 배열 값만 렌더링된다. Boolean , undefined , 객체 등은 화면에 렌더링되지 않는다. 
// 3. 모든 태그는 닫혀 있어야 한다. 여는 태그가 있으면 닫는 태그도 있어야 한다. img태그도, self-closing 해 주거나 해야 한다. 
// 4. 최상위 태그는 반드시 하나여야 한다. 감쌀 만한 마땅한 태그가 없으면 <></> 빈 태그라도 둬야 한다. 
