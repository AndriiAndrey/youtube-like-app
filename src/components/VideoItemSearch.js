import React from 'react';
import { Typography, CardActionArea, 
    CardContent, CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';


const VideoItemSearch = ({ video, onVideoSelect }) => {
    return (
            <Card onClick={() => onVideoSelect(video)} className="card-video-item">
              <CardActionArea className="card-video-action">
                <CardMedia className='card-video-image'
                    component='img'
                    src={video.snippet.thumbnails.default.url}
                    />
                <CardContent className='card-video-content'>
                    <Typography  variant="subtitle2">
                        {video.snippet.title}
                    </Typography>
               </CardContent>
            </CardActionArea>
            </Card>
    )
}

export default VideoItemSearch;
