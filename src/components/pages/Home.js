import React from 'react'
import {
  VStack,
  Flex,
  HStack,
  Heading,
  Text,
  Box,
} from '@chakra-ui/react';
const MainPage = () => {
  return (
    <Flex direction="column" justify="center" padding={5}>
      <VStack>
        <Heading>Home</Heading>
      </VStack>
      <HStack paddingTop={5} paddingLeft={20} paddingRight={20}>
        <VStack>
          <Box>
            <Text fontSize="4xl">Wish you know?</Text>
            <Text fontSize="4xl">Get it here!</Text>
            <Text fontSize="4xl">Search it now</Text>
            <Text fontSize="xl">Search it now</Text>
          </Box>
        </VStack>
      </HStack>
    </Flex>
  );
}

export default MainPage