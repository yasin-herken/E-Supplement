import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    Avatar,
    HStack,
    Text,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { AiFillHome } from 'react-icons/ai';
function NavbarMenu() {
    return (
        <Menu>
            <MenuButton >
                <Avatar size="sm"></Avatar>
            </MenuButton>
            <MenuList bgColor={"#302c34"} color="whiteAlpha.700">
                <MenuGroup title="Account" as="b">
                    <MenuItem>
                        <HStack spacing={"2"} pl="3">
                            <Icon as={AiFillHome} size="sm" />
                            <Text fontSize="16px">Updates</Text>
                        </HStack>
                    </MenuItem>
                    <MenuItem>
                        <HStack spacing={"2"} pl="3">
                            <Icon as={AiFillHome} size="sm" />
                            <Text fontSize="16px">Messages</Text>
                        </HStack>
                    </MenuItem>
                    <MenuItem>
                        <HStack spacing={"2"} pl="3">
                            <Icon as={AiFillHome} size="sm" />
                            <Text fontSize="16px">Tasks</Text>
                        </HStack>
                    </MenuItem>
                    <MenuItem>
                        <HStack spacing={"2"} pl="3">
                            <Icon as={AiFillHome} size="sm" />
                            <Text fontSize="16px">Comments</Text>
                        </HStack>
                    </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Settings">
                    <MenuItem>
                        <HStack spacing={"2"} pl="3">
                            <Icon as={AiFillHome} size="sm" />
                            <Text fontSize="16px">Profile</Text>
                        </HStack>
                    </MenuItem>
                    <MenuItem>
                        <HStack spacing={"2"} pl="3">
                            <Icon as={AiFillHome} size="sm" />
                            <Text fontSize="16px">Settings</Text>
                        </HStack>
                    </MenuItem>
                    <MenuItem>
                        <HStack spacing={"2"} pl="3">
                            <Icon as={AiFillHome} size="sm" />
                            <Text fontSize="16px">Payments</Text>
                        </HStack>
                    </MenuItem>
                    <MenuItem>
                        <HStack spacing={"2"} pl="3">
                            <Icon as={AiFillHome} size="sm" />
                            <Text fontSize="16px">Projects</Text>
                        </HStack>
                    </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuItem>
                    <HStack spacing={"2"} pl="3">
                        <Icon as={AiFillHome} size="sm" />
                        <Text fontSize="16px">Logout</Text>
                    </HStack>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default NavbarMenu