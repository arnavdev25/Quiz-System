import React from 'react'
import {Link} from "react-router-dom";
import M from './M.png'
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/auth/action';
const Navbar = () => {
  const dispatch=useDispatch()
  return (
      <div className="mt-0 mb-3 w-full text-lg font-bold  bg-[#0e1023] shadow-2xl p-3 text-[#fee3e1] fixed flex justify-around mx-auto px-4 sm:px-6">
        <div>
          <Link to='/dashboard' >
            <img src={M} alt='a' className='h-12'/>
          </Link>
        </div>
      <Link to="/profile" >Profile</Link>
      <Link to="/" >Login</Link>
      <Link onClick={()=>{
        dispatch(logoutUser())
      }} to="/logout">Log Out</Link>
       </div>
  )
}

export default Navbar