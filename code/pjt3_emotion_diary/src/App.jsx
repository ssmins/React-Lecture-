// import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import New from './pages/new'
import Diary from './pages/diary'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'
import { createContext, useReducer, useRef } from 'react'
// import Button from './components/Button'
// import Header from './components/Header'

// import { getEmotionImage } from './util/get-emotion-image'
// // 일일이 이것들을 페이지마다 import하기 비효율적이니까 "./util/get-emotion-image.js"
// import emotion1 from "./assets/emotion1.png"
// import emotion2 from "./assets/emotion2.png"
// import emotion3 from "./assets/emotion3.png"
// import emotion4 from "./assets/emotion4.png"
// import emotion5 from "./assets/emotion5.png"

// "/" : 모든 일기를 조회하는 Home 
// "/new" : 새로운 일기를 저장하는 New 
// "/diary" : 일기를 상세히 조정하는 Diary 

const mokData = [
  {
    id : 0, 
    createdDate : new Date("2025-02-05").getTime(), 
    emotionId : 4,
    content : "0번 일기 내용", 
  }, 
  {
    id : 1, 
    createdDate : new Date("2025-02-04").getTime(), 
    emotionId : 1,
    content : "1번 일기 내용", 
  }, 
  {
    id : 2, 
    createdDate : new Date("2025-01-22").getTime(), 
    emotionId : 2,
    content : "2번 일기 내용", 
  }, 
]

function reducer(state, action) {
  switch(action.type){
    case "Create" : return [action.data, ...state ]
    case "Update" : return state.map((item) => String(item.id) === String(action.data.id)? action.data : item)
    case "Delete" : return state.filter((item) => String(item.id) !== String(action.data.id))
    default : state  
  } 
} 

export const DiaryStateContext = createContext() // 일단 만들고 나서 , App Component의 data 값이 각 자식 Components에게도 전달되게 감싸야 한다. 
export const DiaryDispatchContext = createContext() 

function App() {
  const [data, dispatch] = useReducer(reducer, mokData)
  const idRef = useRef(3) // 추가로 저장할 id의 초기값 설정 

  // 새로운 일기 추가 (C)
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type : "Create", 
      data : {
        id : idRef.current++,  
        createdDate, emotionId, content 
      }
    })
    console.log(`${idRef.current}번 게시글이 생성되었습니다.`)
  }

  // 기존 일기 수정 (U)
  const onUpdate = (id, createdDate, emotionId, content) => {
    console.log("id : ", id, "createDate : ", createdDate , "emotionId : ", emotionId, "content : ", content )
    dispatch({
      type : "Update", 
      data : {
        id, createdDate, emotionId, content
      }
    })
  }

  // 기존 일기 삭제 (D)
  const onDelete = (id) => {
    dispatch({
      type : "Delete", 
      data : {
        id 
      }
    })
  }
  
  // const nav = useNavigate()

  // const onClickButton = (event) => {
  //   // console.log(event.target.dataset.path)
  //   switch (event.target.dataset.path) {
  //     case "Home" : nav("/") ; break 
  //     case "New" : nav("/new") ; break 
  //     case "Diary" : nav("/diary") ; break 
  //   }
  // }

  return (
    <>
      <div>
        {/* public 안의 이미지를 경로를 통해 불러오면 vite가 자동으로 제공하는 이미지 최적화가 동작하지 않는다. */}
        {/* assets 안에 저장하면 메모리에 캐시된 채로 저장되기 때문에 한 번 불러온 이미지들을 다시 불러오지 않도록 최적화가 된다.  */}
        {/* public 안에 저장된 건 페이지가 새로고침될때마다 다시 불러와야 한다. */}
        {/* <div>
          <img src={"/emotion1.png"} alt="emotion1"/>
          <img src={"/emotion2.png"} alt="emotion2"/>
          <img src={"/emotion3.png"} alt="emotion3"/>
          <img src={"/emotion4.png"} alt="emotion4"/>
          <img src={"/emotion5.png"} alt="emotion5"/>
        </div> */}
        {/* <div>
          <img src={getEmotionImage(1)} alt="emotion1" />
          <img src={getEmotionImage(2)} alt="emotion2" />
          <img src={getEmotionImage(3)} alt="emotion3" />
          <img src={getEmotionImage(4)} alt="emotion4" />
          <img src={getEmotionImage(5)} alt="emotion5" />
        </div> */}
      </div>

      <div>
        {/* <div> 
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
        </div> */}
      </div>
        
      <div>
        {/* <Header 
          title={"Header"} 
          leftChild={<Button text={"<"}/>}
          rightChild={<Button text={">"} />}
          /> */}
        
        {/* <Button 
          text={"Default"} 
          type={"Default"}
          onClick={() => {
          console.log("Default 버튼 클릭")
        }}/>
        <Button 
          text={"Positive"} 
          type={"Positive"}
          onClick={() => {
          console.log("Positive 버튼 클릭")
        }}/>
        <Button 
          text={"Negative"} 
          type={"Negative"}
          onClick={() => {
          console.log("Negative 버튼 클릭")
        }}/> */}
      </div>

      {/* <div className="test">
        <button onClick={() => {
          onCreate(new Date().getTime(), 1, "일기가 생성되었습니다." )}}
          >
          일기 추가 테스트
        </button>
        <button onClick={() => {
          onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다." )}}
          >
          일기 수정 테스트
        </button>
        <button onClick={() => {
          onDelete(2)}}
          >
          일기 삭제 테스트
        </button>
      </div> */}

      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
