import React from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Post from '../components/Post';

const PostList = ({ posts }) => {
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate('/dashboard/question');
  };

  return (
    <Box height="100vh" className="App">
      <VStack spacing={4} align="start" margin={4}>
        <Button
          colorScheme="blue"
          size="lg"
          onClick={handleCreatePost}
        >
          Hacer publicación
        </Button>
        <Box width="100%">
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default PostList;
