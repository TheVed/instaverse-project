import axios from 'axios';

const url = 'localhost:3000/posts';

export const fetchPosts = () => {
   return(
    axios.get(url)
   ) 
}

export const createPost = (newPost) => {
   return(
      axios.post(url,newPost)
   )
}
