import React, {useState,useEffect,}from 'react';
import './App.css';
import Data from './data';
import fire from './firebase';
import Login from './login';

const Setup=()=>{
  const [user,setUser]=useState('');
  const [email,setEmail]=useState(''); 
   const [password,setPassword]=useState(''); 
   const [emailError,setEmailError]=useState('');
   const [passwordError,setPasswordError]=useState('');
   const [hasAccount,setHasAccout]=useState(false);

   const clearInputs=()=>{
  setEmail('');
  setPassword('');
  };
  const clearErrors=()=>{
    setEmailError('');
    setPasswordError('');
    };
    

 const handleLogin=()=>{
   clearErrors();
   fire
   .auth()
   .signInWithEmailAndPassword(email,password)
   .catch((err)=>{
     switch(err.code){
case "auth/invalid-email":
case "auth/user-disabled":
case "auth/user-not-found":
  setEmailError(err.message);
  break;
case "auth/wrong-password":
  setPasswordError(err.message);
  break;
 }
   })

 }

 const handleSignup=()=>{
  clearErrors();
   fire
  .auth()
  .createUserWithEmailAndPassword(email,password)
  .catch((err)=>{
    switch(err.code){
case "auth/email-already-in-use":
case "auth/invalid-email":
 setEmailError(err.message);
 break;
case "auth/weak-password":
 setPasswordError(err.message);
 break;
}
  });

};
const handleLogout=()=>{
  fire.auth().signOut();
};
const authListener=()=>{
  fire.auth().onAuthStateChanged((user)=>{
    if(user){
      clearInputs();
      setUser(user);
    }else{
      setUser("");
    }
  })
};
useEffect(()=>{
  authListener();
},[]);


return(
<div className="App">
  {user?
  (
      <Data handleLogout={handleLogout}/>
    

  ) :(
<Login
  email={email}
  password={password}
  setEmail={setEmail}
  setPassword={setPassword}
  emailError={emailError}
  passwordError={passwordError}
  handleLogin={handleLogin}
  handleSignup={handleSignup}
  hasAccount={hasAccount}
  setHasAccout={setHasAccout}
/>

  )
  
}
  
 </div>

);

};
export default Setup;
