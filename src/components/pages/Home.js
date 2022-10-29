import React from 'react'
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Heading,
  Text,
} from '@chakra-ui/react';
const MainPage = () => {
  return (
    <VStack spacing={4}>
      <Heading>Home</Heading>
      <Text>Brody is here!</Text>
      <Text>swag!</Text>
    </VStack>
  );
}

export default MainPage