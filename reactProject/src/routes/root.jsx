import Question from '../sections/Question';
import Home from '../sections/Home';
import Doubts from '../sections/Doubts';
import Tags from '../sections/Tags';
import Questions from '../sections/Questions';

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
        element: <Home />,
    },
    {
        path: '/dashboard/doubts',
        element: <Doubts posts={posts} />,
    },

    {
        path: '/dashboard/tags',
        element: <Tags />,
    },

    {
        path: '/dashboard/questions',
        element: <Questions posts={posts} />,
    }
];

export default router;