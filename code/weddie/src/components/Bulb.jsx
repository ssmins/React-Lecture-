import { useState } from "react";


const Bulb = () => {
  const [light, setLight] = useState("OFF") // ref 처럼 변화하는 값을 보여주고 싶을 땐 state 를 활용 ! 

  return (
    <div>
      {light === "ON" ? (
        <h1 style={{backgroundColor : "orange"}}>ON</h1>
      ) : (
        <h1 style={{backgroundColor : "grey"}}>OFF</h1>
      )}

      <button onClick={() => {
        setLight(light === "ON"? "OFF" : "ON")
      }}>
        {light === "ON"? "끄기": "켜기"}
      </button>
    </div>
  )
}

export default Bulb