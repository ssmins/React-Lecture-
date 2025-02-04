import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import New from './pages/new'
import Diary from './pages/diary'
import Notfound from './pages/Notfound'

import emotion1 from "./assets/emotion1.png"
import emotion2 from "./assets/emotion2.png"
import emotion3 from "./assets/emotion3.png"
import emotion4 from "./assets/emotion4.png"
import emotion5 from "./assets/emotion5.png"

// "/" : 모든 일기를 조회하는 Home 
// "/new" : 새로운 일기를 저장하는 New 
// "/diary" : 일기를 상세히 조정하는 Diary 

function App() {
  const nav = useNavigate()

  const onClickButton = (event) => {
    // console.log(event.target.dataset.path)
    switch (event.target.dataset.path) {
      case "Home" : nav("/") ; break 
      case "New" : nav("/new") ; break 
      case "Diary" : nav("/diary") ; break 
    }
  }

  return (
    <>
      <div>
        <img src={emotion1} alt="emotion1" />
        <img src={emotion2} alt="emotion2" />
        <img src={emotion3} alt="emotion3" />
        <img src={emotion4} alt="emotion4" />
        <img src={emotion5} alt="emotion5" />
      </div>
      <div> 
        1. 링크가 필요할 땐 Link 컴포넌트를 활용하기: 정적인 네비게이션 <br />
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <div>
        2. 이벤트 핸들러 함수 안에서 특정 조건에 따라 페이지를 이동시킬거면 useNavigate라는 커스텀 Hook을 불러와 사용하기 : 클릭 이벤트 기반 이동 <br></br>
        <button data-path="Home" onClick={onClickButton}>to Home</button>
        <button data-path="New" onClick={onClickButton}>to New</button>
        <button data-path="Diary" onClick={onClickButton}>to Diary</button>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
