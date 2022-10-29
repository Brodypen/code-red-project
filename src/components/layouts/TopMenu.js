import { Button, HStack, WrapItem} from '@chakra-ui/react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import React from 'react';
import { FaHome, FaBook, FaInfo } from 'react-icons/fa';
import HamburgerButton from './HamburgerButton';

const TopMenu = ({onClick}) => {
  return (
    <div>
      <HStack>
        <Button leftIcon={<FaHome />} onClick={() => onClick('Home')}>
          Home
        </Button>
        <Button leftIcon={<FaBook />} onClick={() => onClick('loginPage')}>Login</Button>
        
        <HamburgerButton/>
        <WrapItem>
          <Avatar
            size="md"
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
          />{' '}
        </WrapItem>
      </HStack>
    </div>
  );
};

export default TopMenu;
