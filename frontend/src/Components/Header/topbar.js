import React from "react";
import Language from "../../assets/img/language.png";
import { Button } from "react-bootstrap";
import Popup from "reactjs-popup";
import Login from "../Login/login";
import { useSelector,useDispatch } from "react-redux";
import {logout} from "../../redux/userRedux.js"

function Topbar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logout())
  };

  return (
    <div className="header__top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="header__top__left">
              <ul>
                <li>
                  <i className="fa fa-envelope" /> Supplement
                </li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="header__top__right">
              <div className="header__top__right__social">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
                <a href="#">
                  <i className="fa fa-pinterest-p" />
                </a>
              </div>
              <div className="header__top__right__language">
                <img src={Language} alt="" />
                <div>English</div>
                <span className="arrow_carrot-down" />
                <ul>
                  <li>
                    <a href="#">Turkish</a>
                  </li>
                  <li>
                    <a href="#">English</a>
                  </li>
                </ul>
              </div>
              <div className="header__top__right__auth">
                {}
                {user ? (
                  <div> {user.user.username}
                  <Button onClick={handleClick}> LogOut</Button>
                  </div>
                  
                  
                ) : (
                  <Popup
                    trigger={
                      <button className="fa fa-user login-button">
                        {" "}
                        Login{" "}
                      </button>
                    }
                    position="left top"
                  >
                    <Login />
                  </Popup>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
