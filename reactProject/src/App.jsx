import {Box} from '@chakra-ui/react'
import './App.css'
import PostList from './sections/Home'

const posts = [
	{ id: 1, title: 'Primera Publicación', content: 'Este es el contenido de la primera publicación.' },
	{ id: 2, title: 'Segunda Publicación', content: 'Este es el contenido de la segunda publicación.' }
  ];

function App() {
	return (
		<Box className="App">
			<PostList posts = {posts} />
		</Box>
  	)
}

export default App
