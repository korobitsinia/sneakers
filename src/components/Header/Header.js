import React from "react";
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={"d-flex justify-between align-center p-40 header"}>
            <Link to={"/"}>
                <div className={"d-flex align-center"}>
                    <img width={40} height={40} src="/img/logo.png" alt={"LOGO"}/>
                    <div>
                        <h3 className={"text-uppercase"}>React sneakers</h3>
                        <p className={"opacity-5"}>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>

            <ul className={"headerRight d-flex cu-p"}>
                <li className={"mr-30"} onClick={props.onClickCart}>
                    <img width={18} height={18} src="/img/cart.svg" alt={"icon"}/>
                    <span>1205 rub</span>
                </li>
                <li className={"mr-20"}>
                    <Link to={"/favorites"}>
                        <img width={18} height={18} src="/img/like.svg" alt={"icon"}/>
                    </Link>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg" alt={"icon"}/>
                </li>
            </ul>

        </header>

    )
}

export default Header