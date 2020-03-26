import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <Grid item xs={12}>
            <Paper className='video-list-paper'>
                <img  
                alt="snippet" 
                src={video.snippet.thumbnails.default.url} 
                onClick={() => onVideoSelect(video)}/>
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem
