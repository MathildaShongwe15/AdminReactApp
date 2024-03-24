import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


export function Register2() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <div className='header'>
         <img  src={'../src/assets/Logo (2).png'}/>
        <div className='text' >Welcome Back!</div>
        <div className='underline'></div>
      </div>
      <div className="inputs">
        <div className="input" >
          <input type="text" placeholder='Enter Email Address'></input>
        </div>
        <div className="input">
          <input type="password" placeholder='Enter Password'></input>
        </div>

        <div className='submit-container' >
          <button className='submit'>Sign Up</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default Register2
