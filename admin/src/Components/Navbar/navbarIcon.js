import React, { useState } from 'react'
import { Box, Button, ListItem } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
function NavbarIcon({ as, size, float }) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    return (
        <ListItem float={float && float} >
            <Box cursor={"pointer"} as={as} size="24px" color={isHover?"whiteAlpha.800":"whiteAlpha.600"}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            </Box>
        </ListItem>
    )
}

export default NavbarIcon