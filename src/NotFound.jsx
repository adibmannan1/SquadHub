import React from 'react'
import notFound from './images/not-found.svg'

const NotFound = () => {
  return (
    <div className='not-found'>
        <img src={notFound} alt="404 error" className='not-found-image'/>
    </div>
  )
}

export default NotFound