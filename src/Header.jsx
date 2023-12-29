import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from "@mui/material/";
import './header.css'
import { useStateProviderValue } from './StateProvider';

const Header = () => {
    const [{ user }, dispatch] = useStateProviderValue()

    return (
        <div className='header'>
            <div className="header__left">
                <SearchIcon />
                <input
                    placeholder='Search for artists, songs'
                    type='text'
                />

            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header