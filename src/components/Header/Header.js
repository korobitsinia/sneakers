import React from "react";

const Header = (props) => {
    return (
        <header className={"d-flex justify-between align-center p-40 header"}>
            <div className={"d-flex align-center"}>
                <img width={40} height={40} src="/img/logo.png"/>
                <div>
                    <h3 className={"text-uppercase"}>React sneakers</h3>
                    <p className={"opacity-5"}>Магазин лучших кроссовок</p>
                </div>
            </div>

            <ul className={"headerRight d-flex cu-p"}>
                <li className={"mr-30"} onClick={props.onClickCart}>
                    <img width={18} height={18} src="/img/cart.svg"/>
                    <span>1205 rub</span></li>
                <li>
                    <img width={18} height={18} src="/img/user.svg"/>
                </li>
            </ul>

        </header>

    )
}

export default Header