import React,{useEffect} from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Posts from "./components/Posts/posts";
import Form from "./components/Form/form";
import useStyles from "./styles";
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';


import instaverse from './images/Instaverse.png';

const App = ()=>{

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch])

    return(
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Instaverse</Typography>
                <img src={instaverse} alt="Instaverse Pic" height="60" />
            </AppBar>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
                <Grid item xs={12} sm={7}>
                    <Posts/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form/>
                </Grid>
            </Grid>
        </Container>  
    )
}

export default App;