import { Flex, Heading, WrapItem, Avatar } from '@chakra-ui/react';
import React from 'react';
import TopMenu from './TopMenu';
import fly from '../../assets/fly.png';
const TopNavBar = ({ onClick }) => {
  return (
    <Flex justifyContent="space-between">
      <WrapItem>
        <Avatar size="md" name="Breaking Bug" src={fly} />{' '}
        <Heading style={{ whiteSpace: 'nowrap' }} fontSize="4xl" paddingLeft={5}>
          A Ecommerce website
        </Heading>
      </WrapItem>
      <TopMenu onClick={onClick} />
    </Flex>
  );
};

export default TopNavBar;
