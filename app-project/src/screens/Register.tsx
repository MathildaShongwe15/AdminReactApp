
import './App.css'

 function Register() {

  return (
  <>
  <div className='container'>
  <div className='header'>
     <img  src={'../src/assets/Logo (2).png'}/>
    <div className='text' >Create an Account!</div>
    <div className='underline'></div>
  </div>
  <div className="inputs">
  <div className="input" >
      <input type="text" placeholder='Enter First Name'></input>
    </div>
    <div className="input" >
      <input type="text" placeholder='Enter Last Name'></input>
    </div>
    <div className="input" >
      <input type="text" placeholder='Enter Email Address'></input>
    </div>
    <div className="input">
      <input type="password" placeholder='Enter Password'></input>
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
  );
}

export default Register;