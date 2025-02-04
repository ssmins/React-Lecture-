import { memo } from "react"
import "./Header.css"
const Header = () => {

  return (
    <div className="Header">
      <h3>오늘은 📅</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  )
}

const memoizedHeader = memo(Header) // props가 변경되지 않았을 때는 rerendering하지 않는다 !

// export default Header
export default memoizedHeader
// export default memo(Header)