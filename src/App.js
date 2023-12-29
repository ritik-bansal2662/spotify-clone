import React, { useEffect } from 'react'
import Login from './Login'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player'
import { useStateProviderValue } from './StateProvider'

const spotify = new SpotifyWebApi()

const App = () => {
  const [{ user, token }, dispatch] = useStateProviderValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        // console.log('user: ', user);
        dispatch({
          type: 'SET_USER',
          user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      })

      spotify.getPlaylist('37i9dQZEVXcX2qobpE1kym').then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

    }
  }, [])

  console.log('user: ', user);
  console.log('token: ', token);

  return (
    <div>
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }

    </div>
  )
}

export default App
