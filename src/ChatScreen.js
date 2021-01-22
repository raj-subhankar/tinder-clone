import { Avatar } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import './ChatScreen.css'

function ChatScreen() {

    const [input, setInput] = useState('')
    
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879',
            message: "What's up"
        },
        {
            name: 'Ellen',
            image:'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879',
            message:"How's it going!"
        },
        {
            message: 'hi! how are you Ellen!'
        }
    ])

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message: input}])
        setInput('')
    }
    return(
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>YOU MATCHED WITH ELLEN ON 10/08/20</p>
            {messages.map(message => (
                message.name ? (
                    <div className='chatScreen__message'>
                        <Avatar
                            className='chatScreen__image'
                            alt={message.name}
                            src={message.image}
                        />
                        <p className='chatScreen__text'>{message.message}</p>
                    </div>
                ) : (
                        <div className='chatScreen__message'>
                            <p className='chatScreen__textUser'>{message.message}</p>
                        </div>
                )
                
            ))}

            <form className='chatScreen__input'>
                <input 
                    value={input} 
                    onChange={e => setInput(e.target.value)}
                    className='chatScreen__inputField' 
                    type='text' 
                    placeholder='Type a message ...' />
                <button 
                    onClick={handleSend} 
                    type='submit' 
                    className='chatScreen__inputButton'>SEND</button>
            </form>

        </div>
    )
}

export default ChatScreen