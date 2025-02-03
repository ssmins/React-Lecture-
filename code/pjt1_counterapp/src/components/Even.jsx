import { useEffect } from "react"


const Even = () => {
  useEffect(() => {

    return () => {
      console.log("unMount Even Component")
    } // useEffect의 콜백 함수가 반환하는 함수를 클린업(정리함수)이라고 한다. 
    // 이 정리함수는 useEffect가 끝날 때 실행된다. 
    // mount 시 실행되는 useEffect함수가 끝날 때 ? === unMount 시점  
  }, [])

  return (
    <div>짝수입니다.</div>
  )
}

export default Even 