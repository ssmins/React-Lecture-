import "./DiaryList.css"
import Button from "./Button"
import DiaryListItem from "./DiaryListItem"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const DiaryList = ({ data }) => {
  const nav = useNavigate()

  const [sortType , setSortType] = useState("latest")
  const onChangeSortType = (event) => {
    setSortType(event.target.value)
  }

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest"){
        return Number(a.createdDate) - Number(b.createdDate) // 오래된 일기들이 앞으로 정렬되게 
      } else {
        return Number(b.createdDate) - Number(a.createdDate) // 최신 일기들이 앞으로 정렬되게 
      }
      }) // 원본 배열은 건들지 않고 새로운 배열을 반환하는 메서드
    } 

  const sortedData = getSortedData()

  return (
    <div className="DiaryList">
      <div className="menu-bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button 
          onClick={() => nav("/new")}
          text={"새 일기 쓰기"}
          type={"Positive"}
        /> 
      </div>
      <div className="list-wrapper">
        {/* {data.map((item) => <DiaryListItem data={data}/>)} */}
        {sortedData.map((item) => <DiaryListItem key={item.id} {...item}/>)}
      </div>
    </div>
  )
}

export default DiaryList 