import React from 'react';
import { Grid } from '@material-ui/core';
import {SearchBar, VideoList, VideoDetail} from './components';
import CommentsComponent from './components/CommentsComponent';
import './App.css';
import GlobalState from './context/GlobalState';

const App = () => {

    return (
        <div>
            <header className="header"/>
           
            <div className='main-container'>
                <GlobalState>
                    <Grid container spacing={2} justify="center" alignItems="stretch" className='grid-container'>
                
                        <Grid item xs={12} md={8} className='video-detail-container'>
                            <VideoDetail />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <VideoList />
                        </Grid>
                        <Grid item xs={12} style={{marginTop: '40px'}}>
                            <CommentsComponent />
                        </Grid>
                    
                    </Grid>

                        <div className="search-bar-container">
                            <SearchBar />
                        </div>
                        
                </GlobalState>
            </div>
        </div>
    )
}

export default App;