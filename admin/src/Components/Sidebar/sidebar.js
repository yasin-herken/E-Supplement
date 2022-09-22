import React, { useState } from "react";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from "@mui/icons-material";
import { CheckIcon, PhoneIcon, SpinnerIcon, TimeIcon, UnlockIcon, ViewIcon } from '@chakra-ui/icons';
import "./sidebar.css";
import { Avatar, Box, Center, Divider, Flex, Heading, IconButton, Link, List, ListItem, Text } from "@chakra-ui/react";
import NavItem from "./navItem";
import style from "./Sidebar.module.css";
import NavHeader from "./navHeader";
function Sidebar() {
    return (
        // <div className="sidebar">
        //     <div className="sidebarWrapper">
        //         <div className="sidebarMenu">
        //             <h3 className="sidebarTitle">Dashboard</h3>
        //             <ul className="sidebarList">
        //                 <Link to="/" className="link">
        //                     <li className="sidebarListItem active">
        //                         <LineStyle className="sidebarIcon" />
        //                         Home
        //                     </li>
        //                 </Link>
        //                 <li className="sidebarListItem">
        //                     <Timeline className="sidebarIcon" />
        //                     Analytics
        //                 </li>
        //                 <li className="sidebarListItem">
        //                     <TrendingUp className="sidebarIcon" />
        //                     Sales
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="sidebarMenu">
        //             <h3 className="sidebarTitle">Quick Menu</h3>
        //             <ul className="sidebarList">
        //                 <Link to="/users" className="link">
        //                     <li className="sidebarListItem">
        //                         <PermIdentity className="sidebarIcon" />
        //                         Users
        //                     </li>
        //                 </Link>
        //                 <Link to="/products" className="link">
        //                     <li className="sidebarListItem">
        //                         <Storefront className="sidebarIcon" />
        //                         Products
        //                     </li>
        //                 </Link>
        //                 <li className="sidebarListItem">
        //                     <AttachMoney className="sidebarIcon" />
        //                     Transactions
        //                 </li>
        //                 <li className="sidebarListItem">
        //                     <BarChart className="sidebarIcon" />
        //                     Reports
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="sidebarMenu">
        //             <h3 className="sidebarTitle">Notifications</h3>
        //             <ul className="sidebarList">
        //                 <li className="sidebarListItem">
        //                     <MailOutline className="sidebarIcon" />
        //                     Mail
        //                 </li>
        //                 <li className="sidebarListItem">
        //                     <DynamicFeed className="sidebarIcon" />
        //                     Feedback
        //                 </li>
        //                 <li className="sidebarListItem">
        //                     <ChatBubbleOutline className="sidebarIcon" />
        //                     Messages
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="sidebarMenu">
        //             <h3 className="sidebarTitle">Staff</h3>
        //             <ul className="sidebarList">
        //                 <li className="sidebarListItem">
        //                     <WorkOutline className="sidebarIcon" />
        //                     Manage
        //                 </li>
        //                 <li className="sidebarListItem">
        //                     <Timeline className="sidebarIcon" />
        //                     Analytics
        //                 </li>
        //                 <li className="sidebarListItem">
        //                     <Report className="sidebarIcon" />
        //                     Reports
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
        <Flex
            flexDir="column"
            bgColor="#302c34"
            width="250px"
            height="100vh"
        >
            <Box width="100%" height="65px" color="white">
                <Center h="100%" width="100%">
                    <Link href="/" style={{ textDecoration: "none" }}>
                        Supplement
                    </Link>
                </Center>
            </Box>
            <Box width={"100%"}>
                <List color="whiteAlpha.700">
                    <ListItem width="100%" height="50px"></ListItem>
                    <NavHeader title="Dashboard"></NavHeader>
                    <NavItem title="Home"></NavItem>
                    <NavItem title="Analytics"></NavItem>
                    <NavItem title="Sales"></NavItem>
                </List>
            </Box>
            <Box>
                <List color="whiteAlpha.700">
                    <NavHeader title="Quick Menu"></NavHeader>
                    <NavItem title="Users"></NavItem>
                    <NavItem title="Production"></NavItem>
                    <NavItem title="Transactions"></NavItem>
                    <NavItem title="Report"></NavItem>
                </List>
            </Box>
            <Box>
                <List color="whiteAlpha.700">
                    <NavHeader title="Notifications"></NavHeader>
                    <NavItem title="Mail"></NavItem>
                    <NavItem title="Feedback"></NavItem>
                    <NavItem title="Messages"></NavItem>
                </List>
            </Box>
        </Flex>
    )
}

export default Sidebar