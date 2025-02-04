import { useState } from "react"
import Button from "./Button"
import "./Editor.css"
import EmotionItem from "./EmotionItem"

const emotionList = [
  {
    emotionId : 1, 
    emotionName : "완전 좋음"
  }, 
  {
    emotionId : 2, 
    emotionName : "좋음"
  }, 
  {
    emotionId : 3, 
    emotionName : "그럭저럭"
  }, 
  {
    emotionId : 4, 
    emotionName : "나쁨"
  }, 
  {
    emotionId : 5, 
    emotionName : "끔찍함"
  }, 
]

const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear()
  let month = targetDate.getMonth() + 1 
  let date = targetDate.getDate() 

  if (month < 10) {month = `0${month}`}
  if (date < 10) {date = `0${date}`}
  // console.log("year : ", year, "month : ", month , "date : ", date)
  return `${year}-${month}-${date}`
}

const Editor = () => {
  const [input, setInput] = useState({
    createdDate : new Date(), 
    emotionId : 2, 
    content : "", 
  })
  // console.log("input.createdDate : ", input.createdDate)
  // console.log("getStringedDate : ", getStringedDate(input.createdDate))
  const emotionId = 5 // 현재 선택된 emotionId

  const onChangeInput = (event) => {
    // console.log(event)
    // console.log(event.name)
    // console.log(event.value)

    let name = event.target.name 
    let value = event.target.value 

    if (name === "createdDate"){
      value = new Date(value)
    }

    setInput({
      ...input, 
      [name] : value
    })
    // setInput(event.target.value)
  }

  return (
    <div className="Editor">
      <section className="date-section">
        <h4>오늘의 날짜</h4>
        <input name="createdDate" onChange={onChangeInput} value={getStringedDate(input.createdDate)} type="date" />
      </section> 
      <section className="emotion-section">
        <h4>오늘의 감정</h4>
        <div className="item-wrapper">
          {emotionList.map((item) => 
            <EmotionItem 
              onClick={()=>
                onChangeInput({ // button같은 게 아니라 component로 event를 만드려면 event 객체를 직접 만들어 전달해야 한다.
                  target : {
                    name: "emotionId", 
                    value: item.emotionId
                  }
                })
              }
              key={item.emotionId} 
              {...item} 
              isSelected={item.emotionId === input.emotionId}
            />
          )}
        </div>
      </section>
      <section className="content-section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content" 
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어떤 일이 있었나요?"
        >
        </textarea>
      </section>
      <section className="button-section">
        <Button 
          text={"취소하기"}
        />
        <Button 
          text={"작성 완료"}
          type={"Positive"}
        />
      </section>
    </div>
  )
}

export default Editor 