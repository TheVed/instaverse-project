import React,{useState} from "react";
import useStyles from './styles';
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import { createPost } from '../../actions/posts';

const Form = () => {

    const [postData,setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''});
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createPost(postData));
    }

    const clear = () => {
        
    }

    return(
        <Paper className={classes.paper}>
            <form className={classes.form} onSubmit={handleSubmit} autoComplete="off" noValidate>
            <Typography variant="h6">Create A Post</Typography>
            <TextField
                name="creator"
                label="Creator" 
                variant="outlined"
                fullWidth
                value={postData.creator}
                onChange={(event)=>{setPostData({...postData, creator:event.target.value})}}
            />
            <TextField
                name="title"
                label="Title" 
                variant="outlined"
                fullWidth
                value={postData.title}
                onChange={(event)=>{setPostData({...postData, title:event.target.value})}}
            />
            <TextField
                name="message"
                label="Message" 
                variant="outlined"
                fullWidth
                value={postData.message}
                onChange={(event)=>{setPostData({...postData, message:event.target.value})}}
            />
            <TextField
                name="tags"
                label="Tags" 
                variant="outlined"
                fullWidth
                value={postData.tags}
                onChange={(event)=>{setPostData({...postData, tags:event.target.value})}}
            />
            <div className={classes.fileInput}>
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={(base64)=>setPostData({...postData, selectedFile: base64})}
                />
            </div>
            <Button className={classes.buttonSubmit} type="submit">Submit</Button>
            <Button className={classes.buttonSubmit} onClick={clear}>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;

