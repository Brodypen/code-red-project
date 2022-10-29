import React from 'react'
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
import { FaBars, FaHome, FaBook, FaInfo, FaGithub } from 'react-icons/fa';
const HamburgerButton = () => {
  return (
    <Menu isLazy>
      <MenuButton as={IconButton} icon={<FaBars />} />
      <MenuList>
        <MenuGroup title="Misc" textAlign="left">
          <ColorModeSwitcher />
          <Link
            href="https://github.com/FrostandIce/restaurant-page"
            isExternal
          >
            <MenuItem icon={<FaGithub />}>GitHub</MenuItem>
          </Link>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}

export default HamburgerButton