import { Menu, MenuList, MenuItem, MenuButton, IconButton } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
const NavBurguer = () => {
    return (
        <Menu>
        <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<GiHamburgerMenu />}
            variant='outline'
        />
        <MenuList>
            <MenuItem command='⌘T'>
                New Tab
            </MenuItem>
            <MenuItem command='⌘N'>
                New Window
            </MenuItem>
            <MenuItem command='⌘⇧N'>
                Open Closed Tab
            </MenuItem>
            <MenuItem command='⌘O'>
                Open File...
            </MenuItem>
        </MenuList>
    </Menu>
    )
}

export default NavBurguer