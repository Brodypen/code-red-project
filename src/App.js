import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  Flex,
  Collapse,
  theme,
  useBoolean,
  Text,
} from '@chakra-ui/react';
import Home from './components/pages/Home';
import TopNavBar from './components/layouts/TopNavBar';
import AccountPage from './components/pages/AccountPage';
function App() {
  // Brody's useStuff
    const [home, setHome] = useBoolean(true);
    const [loginPage, setLoginPage] = useBoolean();

    // Brody's functions
    function onClickPageChange(name) {
      setHome.off();
      setLoginPage.off();
      if (name === 'Home') {
        setHome.toggle();
      } else {
        setLoginPage.toggle();
      }
    }
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" justify="center" padding={5}>

        <TopNavBar onClick={onClickPageChange} />
  
      </Flex>
      <Collapse in={home} animateOpacity unmountOnExit>
        <Home />
      </Collapse>
      <Collapse in={loginPage} animateOpacity unmountOnExit>
        <Text>Hey</Text>
        <AccountPage />
      </Collapse>
      <Text>Test</Text>
      {/* <Collapse in={menu} animateOpacity unmountOnExit>
        <Menu />
      </Collapse>
      <Collapse in={contact} animateOpacity unmountOnExit>
        <Contact />
      </Collapse> */}
      {/* {menu ? <Menu /> : <></>}
      {contact ? <Contact /> : <></>} */}
      <Box height="3vh" width="auto" />
    </ChakraProvider>
  );
}

export default App;
