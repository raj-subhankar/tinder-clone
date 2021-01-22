import React from 'react'
import Chat from './Chat'
import './Chats.css'

function Chats() {
    return(
        <div className='chats'>
            <Chat
                name='Ellen'
                message='Wats up ?'
                timestamp='55 mins ago'
                profilePic='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879'
            />
            <Chat
                name='Sandra'
                message='Ola!'
                timestamp='3 days ago'
                profilePic='https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTE5NDg0MDU1MjE4MzI1MDA3/sandra-bullock-9542453-1-402.jpg'
            />
        </div>
    )
}

export default Chats

