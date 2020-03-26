import React, { useContext } from 'react'
import CommentItem from './CommentItem';
import { Grid } from '@material-ui/core';
import { YoutubeContext } from '../YoutubeContext';

const CommentsComponent = () => {
    const { comments } = useContext(YoutubeContext)
    const listOfComments = comments.map( 
        (comment, index) => <CommentItem key={index} comment={comment} />
        )

    return (
        <Grid container spacing={10}>
            {listOfComments}
        </Grid>
    )
}

export default CommentsComponent;
