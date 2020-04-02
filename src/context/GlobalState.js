import React, {useState} from 'react'
import { YoutubeContext } from './YoutubeContext';
import { youtube } from '../api/youtube';

const GlobalState = (props) => {

    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState('');
    const [recomendedVideos, setRecomendedVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [comments, setComments] = useState([]);
    const [likesCount, setLikesCount] = useState('');
    const [disLikesCount, setDisLikesCount] = useState('');
    const [searchValue, setSearchValue] = useState("");
    const [isToggle, setIsToggle] = useState(false);

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

    const providerValue = {videos, recomendedVideos,  setRecomendedVideos, selectedVideo, setSelectedVideo, 
        comments, likesCount, disLikesCount, searchValue, setSearchValue, isToggle, 
        setIsToggle, handleSubmit, fitchMoreVideos, onVideoSelect, }

    return (
        <YoutubeContext.Provider value={providerValue} >
            {props.children}
        </YoutubeContext.Provider>
    )
}

export default GlobalState;
