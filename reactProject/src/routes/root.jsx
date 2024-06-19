import Question from '../sections/DoQuestion';
import Home from '../sections/Home';
import Doubts from '../sections/Doubts';
import Tags from '../sections/Tags';
import Questions from '../sections/Questions';

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
        element: <Doubts />,
    },

    {
        path: '/dashboard/tags',
        element: <Tags />,
    },

    {
        path: '/dashboard/questions',
        element: <Questions />,
    }
];

export default router;