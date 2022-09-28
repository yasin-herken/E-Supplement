import { Flex, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import { FiAlignLeft } from "react-icons/fi";
import NavbarIcon from './navbarIcon';
import NavbarItem from './navbarItem';
import NavbarMenu from './navbarMenu';
function Navbar() {
    return (
        <Flex
            width="100%"
            height="65px"
            bgColor="#302c34"
            flexDir="row"
            as="nav"
            justify="space-between"
        >
            <List m="0" p="5" overflow="hidden" w="100%" verticalAlign={"center"} >
                <NavbarIcon as={FiAlignLeft} float="left" size="24px" />
                <NavbarItem float={"left"} href="/dashboard" title="Dashboard" />
                <NavbarItem float={"left"} href="/dashboard" title="Users" />
                <NavbarItem float={"left"} href="/dashboard" title="Settings" />
                <ListItem float={"right"}>
                    <NavbarMenu />
                </ListItem>
            </List>
        </Flex>
    )
}

export default Navbar