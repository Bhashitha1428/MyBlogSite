import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import SignglePost from '../../components/SinglePost/SignglePost'
import './Single.css'

function Single() {
    return (
        <div className='single'>
           <SignglePost/> 
           <Sidebar/>
        </div>
    )
}

export default Single
