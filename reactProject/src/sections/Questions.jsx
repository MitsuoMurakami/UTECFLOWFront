import React, { useContext } from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { PostsContext } from '../contexts/PostsContext';
import { SearchContext } from '../contexts/SearchContext';
import Post from '../components/Post';

const Questions = () => {
  const { posts, loading: postsLoading, error: postsError } = useContext(PostsContext);
  const { searchResults, loading: searchLoading, error: searchError , boolBusqueda} = useContext(SearchContext);
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate('/dashboard/question');
  };

  const loading = postsLoading || searchLoading;
  const error = postsError || searchError;

  const resultsToShow = boolBusqueda ? searchResults : posts;

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
          {resultsToShow.map(result => (
            <Post key={result.id} post={result} />
          ))}

          {resultsToShow.length === 0 && (
            <div>No se encontraron resultados</div>
          )}
        </Box>
      </VStack>
    </Box>
  );
};

export default Questions;
