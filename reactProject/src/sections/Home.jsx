import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import Post from '../components/Post';


const PostList = ({ posts }) => {
  return (
	<Box height = "100vh" className="App">
		<Button 
		colorScheme="blue" 
		size="lg" 
		margin="4"
		>Hacer publicación</Button>

		<Box>
		{posts.map(post => (
			<Post key={post.id} post={post} />
		))}
		</Box>
	</Box>
  );
};

export default PostList;
