// 이벤트 객체 
const Button = ({ text, color, children }) => {
const onClickButton = (event) => {
  console.log(event)
  console.log(text)
}

  return (
    <button 
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{color: color}}>
      {text} - {color.toUpperCase()}
      {children}
    </button> 
  )
}

Button.defaultProps = {
  color : 'black', 
}

export default Button 