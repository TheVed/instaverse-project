import React from "react";
import useStyles from './styles';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

const Post = ({post}) => {
    const classes = useStyles();

    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}></CardMedia>
                <div className={classes.overlay}>
                    <Typography variant="h6">{post.creator}</Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button size="small" onClick={()=>{}}>
                        <MoreHorizIcon fontSize="medium" /> 
                    </Button>
                </div>
                <div className={classes.details}>
                    <Typography variant="body2">{post.tags.map((tag)=>`#${tag   }`)}</Typography>
                </div>
                <Typography variant="h5" gutterBottom>{post.title}</Typography>
                <CardContent>
                    <Typography>{post.message}</Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={()=>{}}>
                        <ThumbUpAltIcon/>
                        &nbsp; Like &nbsp;
                        {post.likeCount}
                    </Button>
                    <Button onClick={()=>{}}>
                        <DeleteIcon/>
                        Delete
                    </Button>
                </CardActions>

        </Card>
    )
}

export default Post;