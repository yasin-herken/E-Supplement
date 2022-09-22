import {  HStack, Icon, Link, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillHome } from "react-icons/ai";
import "./navItem.css";
function NavItem({ title }) {
    return (
        <Link href={title} _hover={{textDecoration: "none"}}>
            <ListItem width="100%" height="50px" pl="24px" >
                <HStack spacing={"5"}>
                    <Icon as={AiFillHome} />
                    <Text fontSize="24px">{title}</Text>
                </HStack>
            </ListItem>
        </Link>

    )
}

export default NavItem