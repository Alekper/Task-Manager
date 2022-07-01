import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Signin from './components/Sign in/Signin';
import Home from './components/Home Page/Home';
import Profile from './components/Profile/Profile'



function App() {


console.log('aa');
  return (
    <div className="App">
      <Routes>
        {/* {
          localStorage.getItem('username') !== null && localStorage.getItem('password') !== null ? 
          <Route path='/home' element={<Home/>} /> : 
          <Route path='/home' element={<Signin/>} />
        }
        {
          localStorage.getItem('username') !== null && localStorage.getItem('password') !== null ? 
          <Route path='/profile' element={<Profile/>} /> : 
          <Route path='/profile' element={<Signin/>} /> 
          
        }
        {
          localStorage.getItem('username') !== null && localStorage.getItem('password') !== null ? 
          <Route path='/' element={<Home/>} /> : 
          <Route path='/' element={<Signin/>} />
          
        } */}
{
          localStorage.length === 0 ? 
          <Route path='/home' element={<Signin/>} /> :
          <Route path='/home' element={<Home/>} /> 

}        
{
          localStorage.length === 0 ? 
          <Route path='/profile' element={<Signin/>} /> :
          <Route path='/profile' element={<Profile/>} />  

}        
{/* {
          localStorage.length === 0 ? 
          <Route path='/' element={<Signin/>} /> :
          
}         */}
          <Route path='/' element={<Signin/>} /> 
      </Routes>
    </div>
  );
}

export default App;



