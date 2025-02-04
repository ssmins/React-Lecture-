import { useNavigate } from "react-router-dom"
import { getEmotionImage } from "../util/get-emotion-image"
import Button from "./Button"
import "./DiaryListItem.css"


const DiaryListItem = ({id, emotionId, createdDate, content}) => {

  const nav = useNavigate()

  return (
    <div className="DiaryListItem">
      <div 
        onClick={() => nav(`/diary/${id}`)}
        className={`image-section image-section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} alt="" />
      </div>
      <div 
        onClick={() => nav(`/diary/${id}`)}
        className="info-section"
      >
        <div className="created-date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">
          {content}
        </div>
      </div>
      <div className="button-section">
        <Button 
          onClick={() => nav(`/edit/${id}`)}
          type={"Default"}
          text={"수정하기"}
        />
      </div>
    </div>
  )
}

export default DiaryListItem 