import React from 'react'
import Home from './home/Home'
import Signups from './Signup/Signups'
import { Route, Routes} from "react-router-dom"
import Signingup from './components/Register'

const App = () => {
  return (
    <>
    {/* <Home />
    <Sign /> */}
<div className='dark:bg-slate-900 dark:text-white'>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/Sign" element={<Signups />}/>
   <Route path="/Signingup" element={<Signingup />}/>
</Routes>
</div>
    </>
  )
}
export default App
