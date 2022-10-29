import { Flex, Heading } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import TopMenu from './TopMenu';

const TopNavBar = ({ onClick }) => {

  return (
    <Flex justifyContent="space-between">
      <Heading style={{ whiteSpace: 'nowrap' }} fontSize="4xl">
        A Ecommerce website
      </Heading>
        <TopMenu onClick={onClick}/>
    </Flex>
  );
};

export default TopNavBar;
