// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
} // export default 는 이 math.js 를 대표하는 하나의 함수, 전달하면 그건 줄 안다. 

// export default function square(a) {
//   return a**2
// } // export default 는 한 파일에 하나만 ! 


// // 이렇게 Export 할 수 있다. 
// const add = (a, b) => {
//   return a + b 
// }

// const sub = (a, b) => {
//   return a - b 
// }

// export {add , sub}


// // CJS (Common JS 모듈 시스템)

// const add = (a, b) => {
//   return a + b 
// } 

// const sub = (a, b) => {
//   return a - b 
// }

// module.exports = { 
//   add, sub
// }
