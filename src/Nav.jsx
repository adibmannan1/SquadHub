import React from 'react'
import {Link} from 'react-router-dom';


const Nav = () => {
  return (
    <div className='custom-navbar'>
        <ul>
            <li className='nav-item'><Link to="/" className='nav-link'>Home</Link></li>
            <li className='nav-item'><Link to="/groupedTeamMembers" className='nav-link'>Teams</Link></li>
        </ul>
    </div>
  )
}

export default Nav