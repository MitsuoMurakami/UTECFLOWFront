// src/sections/Questions.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostsContext } from '../contexts/PostsContext';

const Questions = () => {
  const { posts, loading, error } = useContext(PostsContext);
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>hola</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.titulo}</h2>
          <p>{post.texto}</p>
        </div>
      ))}
    </div>
  );
};

export default Questions;
