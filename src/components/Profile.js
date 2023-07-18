import React from 'react'
import './Components.css';
import Button from './Button';

function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-flex'>
            <img src={require('../assets/profile/myself.jpg')}/>
            <div className='profile-info'>
                <h3>Jayharron Abejar</h3>
                <p>Cebu, Philippines</p>
            </div>
            <div className='right'>
                <Button/>
            </div>
        </div>
    </div>
  )
}

export default Profile