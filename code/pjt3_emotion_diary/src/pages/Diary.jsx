import { useParams } from "react-router-dom"


const Diary = () => {
  const params = useParams() // url parameter 를 꺼내올 수 있는 기능을 제공하는 react-router의 custom hook, useParams
  // console.log(params)

  return (
    <div>{params.id}번 일기입니다.</div>
  )
}

export default Diary 