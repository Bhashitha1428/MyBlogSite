import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Setting.css'

function Settings() {
    return (
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settinsTitle'>
                <span className='settingsUpdateTitle'>Update Your Account</span>
                <span className='settingsDeleteTitle'>Delete Your Account</span>
                </div>
               <form className='settingsForm'>
                   <label>Profile Picture</label>
                   <div className='settingsPP'>
                   <img
                   src=''
                   alt=''
                   />
                   <label htmlFor='fileInput'>
                   <i class=" settingsPPIcon far fa-user-circle"></i> 
                   </label>
                   <input type='file' id='fileInput' style={{display:'none'}}/> 
              </div>
              <label>Username</label>
              <input type='text' placeholder='name'/>
              <label>Email</label>
              <input type='email' placeholder='abc@gamil.com'/>
              <label>Password</label>
              <input type='password'  />
              <button className='settingsSubmitButton'>Update</button>
              
               </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Settings
