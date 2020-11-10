import React from 'react';

const Login=(props)=>{
    const{
        email,
         password,
         setEmail, 
         setPassword,
         emailError,
         passwordError,
  handleLogin,
  handleSignup,
  hasAccount,
  setHasAccout
}=props;
    return(
<section className='login'>
<div className='loginContainer'>
    <label>User</label>
    <input 
    type='text'
    autoFocus
    required
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
    <p className='errorMsg'>{emailError}</p>

    <label>Password</label>
    <input 
    type='text'
    required
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    />
    <p className='errorMsg'>{passwordError}</p>
<div className='btnContainer'>
{hasAccount ? (
<>
<button onClick={handleLogin}>Sign In</button>
<p>
Don't have an account?
<span onClick={()=>setHasAccout(!hasAccount)}>Sign Up</span>
</p>
</>
):
(
<>
<button onClick={handleSignup}>Sign Up</button>
<p>
Already have an Account?
<span onClick={()=>setHasAccout(!hasAccount)}>Sign In</span>

</p>

</>

)}


</div>

</div>


</section>

    )
}
export default Login;