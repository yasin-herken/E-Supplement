import React from 'react'
import "./WidgetSm.css";
import { Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethod.js";
import { useSelector } from "react-redux";
import { selectUser } from "../../Pages/Features/userSlice.js";
function WidgetSm() {
    const [users, setUsers] = useState([]);
    const user = useSelector(selectUser);
    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest(user.token.split(" ")[1]).get("users/?new=true");
                setUsers(res.data);
            } catch {console.log("here") }
        };
        getUsers();
    }, [user]);
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {users.map((user) => (
                    <li className="widgetSmListItem" key={user._id}>
                        <img
                            src={
                                user.img ||
                                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                            }
                            alt=""
                            className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.username}</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WidgetSm