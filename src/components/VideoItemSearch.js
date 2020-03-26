import React from 'react';
import { Grid, Typography, CardActionArea, 
    CardContent, CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';


const VideoItemSearch = ({ video, onVideoSelect }) => {
    return (
        <Grid item xs={6} md={4} xl={3} >
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
        </Grid>
    )
}

export default VideoItemSearch;
