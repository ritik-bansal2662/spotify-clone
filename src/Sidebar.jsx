import React from 'react'
import './sidebar.css'
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useStateProviderValue } from './StateProvider';

const Sidebar = () => {
  const [{ playlists }, dispatch ] = useStateProviderValue()
  console.log('playlists: ', playlists);

  return (
    <div className='sidebar'>
        <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='Spotify Logo' className='sidebar__logo' />
        <SidebarOptions Icon={HomeIcon} title='Home' />
        <SidebarOptions Icon={SearchIcon} title='Search' />
        <SidebarOptions Icon={LibraryMusicIcon} title='Your Library' />
        <br />

        <strong className='sidebar__title'>PLAYLISTS</strong>
        <hr />
        
        { playlists?.items?.map(playlist => {
          console.log('playlist: ', playlist);
          return (
            <SidebarOptions title={ playlist.name } />
          )
        })}

    </div>
  )
}

export default Sidebar