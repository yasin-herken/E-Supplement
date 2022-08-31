import React,{useMemo,useState,useEffect} from 'react'
import FeaturedInfo from "../../Components/featuredInfo/FeaturedInfo.js";
import Chart from "../../Components/Chart/Chart.js";
import { userData } from "../../dummyData";
import { userRequest } from '../../requestMethod.js';
import "./Home.css";
import {useSelector} from "react-redux";
import {selectUser} from "../../Pages/Features/userSlice.js";
import WidgetSm from "../../Components/WidgetSm/WidgetSm";
import WidgetLg from "../../Components/WidgetLg/WidgetLg";
function Home() {
  const [userStats, setUserStats] = useState([]);
  const user = useSelector(selectUser)
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
        const res = await userRequest(user.token.split(" ")[1]).get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS,user]);
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart 
          data={userData}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
        <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home