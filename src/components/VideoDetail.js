import React, { useContext } from 'react';
import { Paper, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAltOutlined';
import { YoutubeContext } from '../YoutubeContext';

const VideoDetail = () => {
    const { selectedVideo, likesCount, disLikesCount } = useContext(YoutubeContext)
        
    if (!selectedVideo) return <div>Go search some videos...</div>

    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

    return (
        <>
        <Paper className='video-content-windowe' elevation={6}>
            <iframe 
                frameBorder="0" 
                height="100%" 
                width="100%" 
                title="Video Player"
                src={videoSrc}
                allowFullScreen />
        </Paper>
        <Paper className='video-content-description' elevation={4}>
            <div className='paper-box'>
            <Typography variant="subtitle1">
                <b>{selectedVideo.snippet.title}</b>
            </Typography>
            <Typography className='likes-icons' variant="subtitle1">
                <ThumbUpAltIcon fontSize="default"/>{likesCount} <ThumbDownAltIcon fontSize="default"/>{disLikesCount}
            </Typography>
            <div className='video-description'>
                <Typography variant="subtitle2">{selectedVideo.snippet.description}</Typography>
            </div>
            </div>
        </Paper>
        </>
    )
}

export default VideoDetail;