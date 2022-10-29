import React from 'react';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Link,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { FaBars, FaGithub } from 'react-icons/fa';
const HamburgerButton = () => {
  return (
    <Menu isLazy>
      <MenuButton as={IconButton} icon={<FaBars />} />
      <MenuList>
        <MenuGroup title="Github" textAlign="left">
          <Link href="https://github.com/brodypen" isExternal>
            <MenuItem icon={<FaGithub />}>Brody Pen</MenuItem>
          </Link>
          <Link href="https://github.com/ChrisOh431" isExternal>
            <MenuItem icon={<FaGithub />}>CJ Ohanaja</MenuItem>
          </Link>
          <Link
            href="https://github.com/
aadproj3570"
            isExternal
          >
            <MenuItem icon={<FaGithub />}>Aadarsh Srivatsav</MenuItem>
          </Link>
          <Link href="https://github.com/prashanth440" isExternal>
            <MenuItem icon={<FaGithub />}>Sai Prashanth</MenuItem>
          </Link>
        </MenuGroup>
        <MenuGroup title="Misc" textAlign="left">
          <ColorModeSwitcher />
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default HamburgerButton;
