import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from "@material-ui/icons/Forum"
import { IconButton } from '@material-ui/core'

function Header() {
    return(
        <div className='header'>
            <IconButton>
                <PersonIcon className='header__icon' fontSize='large'/>
            </IconButton>
            <img className='header__logo' src="https://cdn.iconscout.com/icon/free/png-512/tinder-7-226557.png" alt="tinder logo" />
            <IconButton>
                <ForumIcon className='header__icon' fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default Header