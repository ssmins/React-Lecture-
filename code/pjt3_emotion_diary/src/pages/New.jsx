import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Editor from "../components/Editor"
import Header from "../components/Header"


const New = () => {

  const nav = useNavigate()

  return (
    <div className="New">
 
      <Header 
        title = {"새 일기 작성하기"}
        leftChild={
          <Button 
            onClick={()=>{
              nav(-1)
              // nav("/")
            }}
            text={"< 뒤로 가기"}
          />}
      />
      <Editor /> 
    </div>
  )
}

export default New 