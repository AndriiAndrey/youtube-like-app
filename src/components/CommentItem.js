import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core';

const CommentItem = ({comment}) => {
    return (
        <Grid item xs={12}>
            <Paper className='comment-item'>
                <img 
                alt="commenter" 
                src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} 
                />
                <Grid item xs={12}>
                    <Typography display="block" align="left" variant="subtitle2"><b>{comment.snippet.topLevelComment.snippet.authorDisplayName}</b></Typography>
                    <Typography variant="subtitle1">Posted on {comment.snippet.topLevelComment.snippet.updatedAt.slice(0, 10)}</Typography>
                    <Typography display="block" align="left" variant="subtitle2">{comment.snippet.topLevelComment.snippet.textDisplay}</Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default CommentItem;
