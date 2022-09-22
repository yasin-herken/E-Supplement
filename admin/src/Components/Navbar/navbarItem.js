import { Link, ListItem } from '@chakra-ui/react';
import React, { useState } from 'react'
function NavbarItem({ as, size, float, href, title }) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    return (
        <ListItem float={float && float} pl="5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link color={isHover ? "whiteAlpha.600" : "whiteAlpha.800"} href={href} style={{ textDecoration: "none" }} >{title}</Link>
        </ListItem>
    )
}

export default NavbarItem