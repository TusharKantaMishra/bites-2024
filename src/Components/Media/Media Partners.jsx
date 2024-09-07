import React from 'react'
import  './Media Partners.css'
import { Link } from 'react-router-dom';
import media1 from '../Assets/Media1.png'

const MediaPartners = () => {
  return (
    <div>
      <h1 className='heading'>Media Partners</h1>
      <div className="mediaimg">
        <div className="media1">
        <Link to='https://allconferencealert.net/' target='_blank'>
        <img src={media1} alt="" />
        </Link>
        </div>
      </div>
    </div>
  )
}

export default MediaPartners;