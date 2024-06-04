import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import Post from '../components/Post';


import PropTypes from 'prop-types';

const Doubts = ({ posts }) => {
	return (
		<Box height="100vh" className="App">
			<Box>
				{posts.map(post => (
					<Post key={post.id} post={post} />
				))}
			</Box>
		</Box>
	);
};

Doubts.propTypes = {
	posts: PropTypes.array.isRequired,
};


export default Doubts;
