import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import Post from '../components/Post';


const Doubts = ({ posts }) => {
  return (
	<Box height = "100vh" className="App">
		<Box>
		{posts.map(post => (
			<Post key={post.id} post={post} />
		))}
		</Box>
	</Box>
  );
};

export default Doubts;
