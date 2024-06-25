import React, { useState } from 'react';
import { Box, Heading, Text, IconButton, Flex, Input, Button, Tag, TagLabel } from '@chakra-ui/react';
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from 'react-icons/ai';

const Post = ({ post }) => {
  const [commentCount, setCommentCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [liked, setLiked] = useState(false);

  const handleToggleCommentForm = () => {
    setShowCommentForm(prev => !prev);
    setCommentText('');
  };

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleSubmitComment = () => {
    if (commentText.trim() !== '') {
      setComments(prevComments => [...prevComments, commentText]);
      setCommentCount(prevCount => prevCount + 1);
      setCommentText('');
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" padding="4" marginBottom="4" background={"#ece9e9"}>
      <Heading size="md" marginBottom="2">{post.titulo}</Heading>
      <Text marginBottom="4">{post.texto}</Text>
      
      {/* Mostrar las etiquetas */}
      <Flex flexWrap="wrap">
        {post.tags && post.tags.map((tag, index) => (
          <Tag key={index} size="md" variant="subtle" colorScheme="blue" marginRight="2" marginBottom="2">
            <TagLabel>{tag}</TagLabel>
          </Tag>
        ))}
      </Flex>
      
      <Flex justifyContent="space-between" alignItems="center" marginTop="4">
        <Flex alignItems="center">
          <IconButton
            aria-label="Me gusta"
            icon={liked ? <AiFillHeart /> : <AiOutlineHeart />}
            variant="outline"
            colorScheme={liked ? "red" : "blue"}
            onClick={handleLikeClick}
          />
          <Text marginLeft="2">{post.likes}</Text> {/* Mostrar el número de likes */}
        </Flex>
        <Flex alignItems="center">
          <IconButton
            aria-label="Comentario"
            icon={<AiOutlineComment />}
            variant="outline"
            colorScheme="green"
            onClick={handleToggleCommentForm}
          />
          <Text marginLeft="2">{commentCount}</Text>
        </Flex>
      </Flex>
      
      {showCommentForm && (
        <Box marginTop="4">
          <Input
            placeholder="Escribe tu comentario..."
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
          />
          <Button colorScheme="blue" onClick={handleSubmitComment} marginTop="2">
            Enviar
          </Button>
        </Box>
      )}
      
      <Box marginTop="4">
        {comments.map((comment, index) => (
          <Box key={index} borderWidth="1px" borderRadius="md" padding="2" marginTop="2">
            <Text>{comment}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Post;
