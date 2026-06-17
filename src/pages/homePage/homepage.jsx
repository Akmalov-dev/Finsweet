import React from 'react'
import soccer from './images/soccer_pitch.jpg'

const homepage = () => {
  return (
    <>
      <h1 className='pitch'>The Pitch</h1>
      <img className='img-pitch' src={soccer} alt="" />
      <p className='orqali'> Bu Websiteda nima qilamiz ?</p>
    </>
  )
}

export default homepage