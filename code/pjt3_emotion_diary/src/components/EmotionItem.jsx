import { getEmotionImage } from "../util/get-emotion-image"
import "./EmotionItem.css"

const EmotionItem = ({emotionId, emotionName, isSelected, onClick}) => {

  return (
    <div onClick={onClick} className={`EmotionItem ${isSelected ? `on-${emotionId}` : ""}`}>
      <img className="emotion-img" src={getEmotionImage(emotionId)} alt="" />
      <div className="emotion-name">{emotionName}</div>
    </div>
  )
}

export default EmotionItem