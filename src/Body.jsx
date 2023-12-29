import React from 'react'
import SongRow from './SongRow'
import './body.css'
import Header from './Header'
import { useStateProviderValue } from './StateProvider'
import { Favorite, MoreHoriz, PlayCircleFilled } from '@mui/icons-material'

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useStateProviderValue()
  console.log('discover_weekly: ', discover_weekly);

  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt='' />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className='body__shuffle' />
          <Favorite fontSize='large' />
          <MoreHoriz />
        </div>

        {discover_weekly?.tracks.items.map(item => (
          <SongRow track={item.track} />
        ))}

      </div>

    </div>
  )
}

export default Body