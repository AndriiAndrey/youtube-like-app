import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem';
import { YoutubeContext } from '../context/YoutubeContext';

const VideoList = () => {

    const { recomendedVideos, onVideoSelect } = useContext(YoutubeContext);

    const listOfVideos = recomendedVideos.map( 
        (video, index) => <VideoItem key={index} video={video} 
            onVideoSelect={onVideoSelect} />
        )
    return (
        <Grid className='video-list-container' container spacing={4}>
            {listOfVideos}
        </Grid>
        )
}

export default VideoList;