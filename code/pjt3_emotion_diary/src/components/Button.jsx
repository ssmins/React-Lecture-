import "./Button.css"

// 버튼 component를 부모로부터 받는 props에 따라 다르게 동작하게 만들기
const Button = ({ text, type, onClick }) => {

  return (
    <button 
      onClick={onClick}
      className={`Button type_${type}`}
    >
      {text}
    </button>
  )
}

export default Button 