import React, {useState, useMemo} from 'react';
import { Grid } from '@material-ui/core';
import {SearchBar, VideoList, VideoDetail} from './components';
import { youtube } from './api/youtube';
import CommentsComponent from './components/CommentsComponent';
import './App.css';
import { YoutubeContext } from './YoutubeContext';


const App = () => {
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState('');
    const [recomendedVideos, setRecomendedVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [comments, setComments] = useState([]);
    const [likesCount, setLikesCount] = useState('');
    const [disLikesCount, setDisLikesCount] = useState('');
    const [searchValue, setSearchValue] = useState("");
    const [isToggle, setIsToggle] = useState(false);

    const providerValue = useMemo( () => ({videos, 
        setRecomendedVideos, selectedVideo, setSelectedVideo, 
        comments, likesCount, disLikesCount, searchValue, setSearchValue, isToggle, setIsToggle}),
         [videos, setRecomendedVideos, selectedVideo, setSelectedVideo, comments,
            likesCount, disLikesCount, searchValue, setSearchValue, isToggle, setIsToggle] );

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await youtube.getVideos(searchValue)
        console.log(response.data);
        setVideos(response.data.items);
        setNextPageToken(response.data.nextPageToken);
        };

    const fitchMoreVideos = async () =>{
        const fitchResponse = await youtube.fitchMoreVideos(searchValue, nextPageToken);
        setVideos(videos.concat(fitchResponse.data.items));
        setNextPageToken(fitchResponse.data.nextPageToken);
    };

    const onVideoSelect = async (video) => {
        setSelectedVideo(video);
        const responseComment = await youtube.getComments(video);
        console.log(responseComment.data);
        setComments(responseComment.data.items);

        const responseLikes = await youtube.getLikes(video);

        console.log(responseLikes.data);
        setLikesCount(responseLikes.data.items[0].statistics.likeCount);
        setDisLikesCount(responseLikes.data.items[0].statistics.dislikeCount);

        const responseRelative = await youtube.getRelativeVideos(video)
        console.log(responseRelative.data);
        setRecomendedVideos(responseRelative.data.items);

        toggleOut();
    };

    const toggleOut = () =>{
        setIsToggle(false);
        setSearchValue("");
        setVideos([]);
    };

    
    return (
        <div>
            <header className="header">
            </header>
            <div className='main-container'>
            <YoutubeContext.Provider value={providerValue}>
                <Grid container spacing={2} justify="center" alignItems="stretch" className='grid-container'>
            
                    <Grid item xs={12} md={8} className='video-detail-container'>
                        <VideoDetail/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <VideoList videos={recomendedVideos} 
                            onVideoSelect={onVideoSelect} />
                    </Grid>
                    <Grid item xs={12} style={{marginTop: '40px'}}>
                        <CommentsComponent comments={comments} />
                    </Grid>
                
                </Grid>
            

                    <div className="search-bar-container">
                        <SearchBar handleSubmit={handleSubmit} 
                            onVideoSelect={onVideoSelect}
                            fitchMoreVideos={fitchMoreVideos} />
                    </div>
            </YoutubeContext.Provider>
            </div>
        </div>
    )
}

export default App;