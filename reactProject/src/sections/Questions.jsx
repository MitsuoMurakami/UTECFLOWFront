import React, { useContext } from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { PostsContext } from '../contexts/PostsContext';
import Post from '../components/Post';

const Questions = () => {
  const { posts, loading, error } = useContext(PostsContext);
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate('/dashboard/question');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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

export default Questions;
