import React from 'react'
import './AccountPage.css'
import {
  VStack,
  Flex,
  HStack,
  Heading,
  Text,
  Box,
  Input,
  Button,
} from '@chakra-ui/react';

function AccountPage(){
    return (
      <div>
        <VStack>
          <Text fontSize="4xl">Login Page</Text>
        </VStack>

        <div className="form-layout">
          <div className="form-container">
            <p className="sign-in-txt">Sign in</p>
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Password" />
              <button>Create Your Account</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default AccountPage;