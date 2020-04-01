import React, { useContext } from 'react';
import VideoItemSearch from './VideoItemSearch';
import { Grid } from '@material-ui/core';
import { Paper, TextField, ClickAwayListener, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import { YoutubeContext } from '../YoutubeContext';

const SearchBar = ({handleSubmit, fitchMoreVideos, onVideoSelect}) => {
    const {videos, searchValue, setSearchValue,
        isToggle, setIsToggle, } = useContext(YoutubeContext)
    const handleChange = (e) => {
        setSearchValue(e.target.value)
    };
    
    const listOfVideos = videos.map(
        (video, index) => <VideoItemSearch key={index} video={video} 
            onVideoSelect={onVideoSelect} />
        );

    return (
        <>
        <ClickAwayListener onClickAway={() => setIsToggle(false)}>
        <Paper className='search-paper' elevation={6} >
            <form onSubmit={(e) => handleSubmit(e)}>

                <TextField onClick={ ()=>setIsToggle(true) }
                fullWidth 
                value={searchValue}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon className='search-button' onClick={(e) => handleSubmit(e)} />
                      </InputAdornment>
                    ),
                  }}
                >  
                </TextField>
            </form>
            {isToggle ?
            <Grid container spacing={4} justify="space-around">
                <Grid item xs={12}>
                    <div className="card-video-item-container">
            {listOfVideos}
                    </div>
                </Grid>
            {videos.length > 0
            ?<Grid className='more-results-button' item xs={12}>
                <Button variant="outlined" onClick={fitchMoreVideos}>more results</Button>
            </Grid>
            :null
            }
            </Grid>
            : null}
        </Paper>
        </ClickAwayListener>
        </>
    )
}

export default SearchBar;