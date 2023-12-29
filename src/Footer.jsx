import React from 'react'
import './footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { VolumeDown } from '@mui/icons-material';
import { Grid, Slider } from "@mui/material/";
// import Grid from '@mui/material/Grid';

const Footer = () => {
  return (
    <>
      <div className="footer__temp"></div>
      <div className='footer'>
        <div className="footer__left">
          <img
            src="https://c.saavncdn.com/206/Up-Se-Haryanvi-2023-20231115140217-500x500.jpg"
            alt=''
            className='footer__albumLogo'
          />
          <div className="footer_songInfo">
            <h4>UP se</h4>
            <p>Rohit Sardhana</p>
          </div>
        </div>

        <div className="footer__center">
          <ShuffleIcon className='footer__green' />
          <SkipPreviousIcon className='footer__icon' />
          <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
          <SkipNextIcon className='footer__icon' />
          <RepeatIcon className='footer__green' />
        </div>

        <div className="footer__right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>

            <Grid item >
              <VolumeDown />
            </Grid>

            <Grid item xs>
              <Slider />
            </Grid>

          </Grid>
        </div>
      </div>
    </>
  )
}

export default Footer