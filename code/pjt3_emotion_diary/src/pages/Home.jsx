// import { useSearchParams } from "react-router-dom"

import { useContext, useState } from "react"
import Button from "../components/Button"
import DiaryList from "../components/DiaryList"
import Header from "../components/Header"
import { DiaryStateContext } from "../App"

// 해당 월의 내용만 필터링해서 가져오게 하는 함수 
const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime() // 1일 0시 0분 0초
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime()
  return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime)
}

const Home = () => {
  // const [params, setParams] = useSearchParams() // params에는 ?어쩌구로 붙는(검색 시에 사용되는)
  // console.log(params.get("value")) // http://localhost:5173/?value=boss 로 접속하면 console에 boss가 출력됨

  const data = useContext(DiaryStateContext) // 일기 데이터 
  
  const [pivotDate , setPivotDate] = useState(new Date())

  // props로 넘겨 줄 데이터 집합  
  const monthlyData = getMonthlyData(pivotDate, data)
  // console.log(monthlyData)

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
  }

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
  }


  return (
    <div>
      <Header 
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`}
        leftChild={
          <Button 
            onClick={onDecreaseMonth}
            type={"Default"}
            text={"<"}
          />
        }
        rightChild={
          <Button 
            onClick={onIncreaseMonth}
            type={"Default"}  
            text={">"}
          />
        }
      /> 
      <DiaryList data={monthlyData} />
    </div>
  )
}

export default Home 