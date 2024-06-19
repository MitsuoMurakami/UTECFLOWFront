import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import router from './routes/root.jsx';
import HomePage from './pages/HomePage.jsx';
import { PostsProvider } from './contexts/PostsContext';

const App = () => {
  const location = useLocation();

  const showMainPage = location.pathname.includes('/');

  return (
    <PostsProvider>
      <div id="App" className="h-full w-full">
        {showMainPage ? <HomePage /> : (
          <Routes>
            {router.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        )}
      </div>
    </PostsProvider>
  );
};

export default App;
