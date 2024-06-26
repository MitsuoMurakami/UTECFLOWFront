import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import router from './routes/root.jsx';
import HomePage from './pages/HomePage.jsx';
import { PostsProvider } from './contexts/PostsContext';
import { TagsProvider } from './contexts/TagsContext';
import { SearchProvider } from './contexts/SearchContext';

const App = () => {
  const location = useLocation();

  const showMainPage = location.pathname.includes('/');

  return (

    <SearchProvider>
    <TagsProvider>
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
    </TagsProvider>
    </SearchProvider>
  );
};

export default App;
