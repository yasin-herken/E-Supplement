import React, { useMemo, useState, useEffect } from 'react'
import { userRequest } from '../../requestMethod.js';
import "./Home.css";
import { useSelector } from "react-redux";
import Sidebar from '../../Components/Sidebar/sidebar.js';
import "../../App.css";
import { Flex } from '@chakra-ui/react';
// import {
//   List,
//   ListItem,
//   ListIcon,
//   OrderedList,
//   UnorderedList,
// } from '@chakra-ui/react';
import Navbar from '../../Components/Navbar/navbar.js';
function Home() {
  const [userStats, setUserStats] = useState([]);
  const user = useSelector((state) => state.user);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest(user?.token.split(" ")[1]).get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch (err) {
        console.log(err)
      }
    };
    getStats();
  }, [MONTHS, user]);
  return (
    <>
      {/* <Topbar />
      <div className='container'>
        <Sidebar />
        <div className="home">
          <FeaturedInfo />
          <Chart
            data={userStats}
            title="User Analytics"
            grid
            dataKey="Active User"
          />
          <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
          </div>
        </div>
      </div> */}
      <Flex
        flexDir="row"
      >
        <Sidebar />
        <Navbar />
      </Flex>

    </>

  )
}

export default Home