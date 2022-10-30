import React from 'react';
import {
  VStack,
  Flex,
  HStack,
  Heading,
  Text,
  Box,
  Input,
} from '@chakra-ui/react';

const loadRedditFetch = () => {
  return fetch('localhost:3000')
    .then(response => response.json())
    .then(response => {
      return {
        text: String,
        sent: Number,
      };
    })
    .catch(err => console.error(err));
};
const MainPage = () => {
  const [value, setValue] = React.useState('')
  const handleChange = (event) => setValue(event.target.value)

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
      <VStack paddingLeft={20} paddingRight={20}>
        <Input placeholder="Basic usage" size="lg"/>
      </VStack>
    </Flex>
  );
};

export default MainPage;
