import React, { useState } from 'react'
import "./hero.css";
function Categories() {
    const [active,setActive] = useState(true);
    const [shake, setShake] = useState(false);
    const dropdownHandler = (e) =>{
        e.preventDefault();
        active?setActive(false):setActive(true)
        setShake(true)
        setTimeout(()=>setShake(false),2000)
    }
    return (
        <div className="col-lg-3">
            <div className="hero__categories" onClick={dropdownHandler}>
                <div className="hero__categories__all" >
                    <i className="fa fa-bars" />
                    <span>All departments</span>
                </div>
                <ul className={shake ? `shake`: null} style={{display:active?"block":"none"}}>
                    <li>
                        <a href="#">Fresh Meat</a>
                    </li>
                    <li>
                        <a href="#">Vegetables</a>
                    </li>
                    <li>
                        <a href="#">Fruit &amp; Nut Gifts</a>
                    </li>
                    <li>
                        <a href="#">Fresh Berries</a>
                    </li>
                    <li>
                        <a href="#">Ocean Foods</a>
                    </li>
                    <li>
                        <a href="#">Butter &amp; Eggs</a>
                    </li>
                    <li>
                        <a href="#">Fastfood</a>
                    </li>
                    <li>
                        <a href="#">Fresh Onion</a>
                    </li>
                    <li>
                        <a href="#">Papayaya &amp; Crisps</a>
                    </li>
                    <li>
                        <a href="#">Oatmeal</a>
                    </li>
                    <li>
                        <a href="#">Fresh Bananas</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Categories