import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const listOfVideos = videos.map( 
        (video, index) => <VideoItem key={index} video={video} 
            onVideoSelect={onVideoSelect} />
        )
    return (
        <Grid className='video-list-container' container spacing={10}>
            {listOfVideos}
        </Grid>
        )
}

export default VideoList;