import Question from '../sections/Question';
import Home from '../sections/Home';

const posts = [
	{ id: 1, title: 'Primera Publicación', content: 'Este es el contenido de la primera publicación.' },
	{ id: 2, title: 'Segunda Publicación', content: 'Este es el contenido de la segunda publicación.' }
  ];


const router = [
    {
        path: '/dashboard/question',
        element: <Question />,
    },
    {
        path: '/dashboard/home',
        element: <Home  posts={posts} />,
    }
];

export default router;