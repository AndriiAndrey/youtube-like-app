import axios from 'axios';

const API_KEY = 'AIzaSyBHicHZofz1Uu82-NeZrGM0URGaxw-ZViw';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://www.googleapis.com/youtube/v3/',
});

export const youtube ={

getVideos(searchValue){
    return instance.get('search', { 
        params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY,
        q: searchValue,
        } 
    })
},
fitchMoreVideos(searchValue, nextPageToken){
    return instance.get('search', { 
        params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY,
        q: searchValue,
        pageToken: nextPageToken
        } 
    })
},

getComments(video){
    return instance.get('commentThreads', {
        params: {
            part: 'snippet',
            key: API_KEY,
            textFormat: 'plainText',
            videoId: video.id.videoId,
            maxResults: 10,
        }
    });
},

getLikes(video){
    return instance.get('videos', {
        params: {
            part: 'contentDetails,statistics,snippet',
            key: API_KEY,
            id: video.id.videoId,
        }
    });
},

getRelativeVideos(video){
    return instance.get('search', { 
        params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: API_KEY,
        relatedToVideoId: video.id.videoId,
        } 
    });
}

}