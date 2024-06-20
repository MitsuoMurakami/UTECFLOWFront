// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  useToast,
  VStack,
  HStack,
} from '@chakra-ui/react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usuario_email, setEmail] = useState('');
  const [carrera, setCarrera] = useState('');
  const [ciclo, setCiclo] = useState('');
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: 'Las contraseñas no coinciden',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await axios.post('https://4cko1or492.execute-api.us-east-1.amazonaws.com/test/usuarios', {
        username,
        password,
        usuario_email,
        carrera,
        ciclo
      });
      toast({
        title: response.data.message,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error al registrar',
        status: 'error',
        error: error,
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={4} borderWidth="1px" borderRadius="lg">
      <Heading mb={4} size="lg" textAlign="center">Registro</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={3}>
        <FormControl id="email">
            <FormLabel>Correo Electrónico</FormLabel>
            <Input
              type="email"
              value={usuario_email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="username">
            <FormLabel>Usuario</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <HStack spacing={3} width="100%">
            <FormControl id="carrera">
              <FormLabel>Carrera</FormLabel>
              <Input
                type="text"
                value={carrera}
                onChange={(e) => setCarrera(e.target.value)}
              />
            </FormControl>
            <FormControl id="ciclo">
              <FormLabel>Ciclo</FormLabel>
              <Input
                type="text"
                value={ciclo}
                onChange={(e) => setCiclo(e.target.value)}
              />
            </FormControl>
          </HStack>
          <HStack spacing={3} width="100%">
            <FormControl id="password">
              <FormLabel>Contraseña</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl id="confirmPassword">
              <FormLabel>Confirmar Contraseña</FormLabel>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormControl>
          </HStack>
          <Button type="submit" colorScheme="teal" width="full">
            Registrar
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Register;