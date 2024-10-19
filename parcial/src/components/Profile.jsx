import React from 'react'
import Medio from "./Medio"
import Superior from "./Superior"
import Inferior from "./Inferior"

import "./Profile.css"

const Profile = (props) => {
    const profile=props.profile;
    return (
    <div className='contenedor'>
        
        <Superior/>
        <Medio/>
        <Inferior/>
    </div>
  )
}

export default Profile