import React from 'react';
import { Box } from '@chakra-ui/react';
import Post from '../components/Post';


const PostList = ({ posts }) => {
  return (

    <Box height = "100vh" className="App">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default PostList;
