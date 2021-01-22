import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from "@material-ui/icons/Forum"
import { IconButton } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'

function Header({ backButton }) {
    const history = useHistory()    

    return(
        <div className='header'>
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIcon fontSize='large' className='header__icon' />
                </IconButton>
            ): (
                <IconButton>
                    <PersonIcon className='header__icon' fontSize='large'/>
                </IconButton>
            )}

            <Link to='/'>
                <img className='header__logo' src="https://cdn.iconscout.com/icon/free/png-512/tinder-7-226557.png" alt="tinder logo" />
            </Link>

            <Link to='/chats'>
                <IconButton>
                    <ForumIcon className='header__icon' fontSize='large'/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header