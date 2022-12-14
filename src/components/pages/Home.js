import React, { useState } from 'react';
import {
  VStack,
  Flex,
  HStack,
  Heading,
  Text,
  Box,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
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

function NumberPrompt({ searchText }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const generateRandomSentiment = leng => {
    // listen the API exists and is public on github.com/ChrisOh431 we
    // just couldn't implement it in time

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    const sent = Math.floor((5 * leng) / 2) + 1;
    sleep(125);

    return sent;
  };
  return (
    <>
      <Button onClick={onOpen}>See the Magic Number!</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{searchText}</ModalHeader>

          <ModalCloseButton />
          <ModalBody>
            Sentiment Analysis: {generateRandomSentiment(searchText.length)}
          </ModalBody>
          <ModalBody>
            {generateRandomSentiment(searchText.length) > 10
              ? 'This is a good sentiment! Seems like a good buy'
              : 'This is a bad seniment value!'}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const MainPage = () => {
  const [value, setValue] = React.useState('');
  const handleChange = e => setValue(e.target.value);

  return (
    <Flex direction="column" justify="center" padding={9}>
      <VStack
        paddingTop={16}
        paddingLeft={20}
        paddingRight={20}
        paddingBottom={8}
      >
        <Text fontSize="4xl">Wanna buy something?</Text>
        <Text fontSize="4xl">See what people think first.</Text>
      </VStack>
      <VStack paddingLeft={20} paddingRight={20}>
        <Input
          placeholder="Basic usage"
          size="lg"
          marginBottom={8}
          value={value}
          onChange={handleChange}
        />
        <NumberPrompt searchText={value} />
      </VStack>
    </Flex>
  );
};

export default MainPage;
