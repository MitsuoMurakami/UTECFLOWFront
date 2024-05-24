import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Sidebar from './components/sidebar';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Sidebar children={null}>
  
      </Sidebar>
    </ChakraProvider>
  );
};

export default App;
