import React, {Fragment, useCallback, useEffect, useMemo} from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Signin from './components/Sign in/Signin';
import Home from './components/Home Page/Home';
import Profile from './components/Profile/Profile'

function AuthorizedPage({render}) {
  const navigate = useNavigate()
  const isAuthorized = !!localStorage.getItem('username')

  useEffect(() => {
    if (!isAuthorized)
      navigate('/signin')
  }, [isAuthorized, navigate])

  if (!isAuthorized)
    return null

  return render()
}

function App() {
  const isAuthorized = !!localStorage.getItem('username')
  const renderProfile = useCallback(() => (<Profile />), [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<AuthorizedPage render={renderProfile} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;



