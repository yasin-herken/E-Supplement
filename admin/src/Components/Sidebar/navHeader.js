import { Link, ListItem, Text } from '@chakra-ui/react'
import React from 'react'

function NavHeader({ title }) {
    return (
        <ListItem height="60px" width="100%" pl="3">
            <Text as="b" color="white" fontSize="12px" fontWeight="700" position="relative" top="24px">
                {title}
            </Text>
        </ListItem>
    )
}

export default NavHeader