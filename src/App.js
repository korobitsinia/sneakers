import React from "react";

function App() {
    return (
        <div className="App clear">
            <header className={"d-flex justify-between align-center p-40 header"}>
                <div className={"d-flex align-center"}>
                    <img width={40} height={40} src="/img/logo.png"/>
                    <div>
                        <h3 className={"text-uppercase"}>React sneakers</h3>
                        <p className={"opacity-5"}>Магазин лучших кроссовок</p>
                    </div>
                </div>

                <ul className={"headerRight d-flex"}>
                    <li className={"mr-30"}>
                        <img width={18} height={18} src="/img/cart.svg"/>
                        <span>1205 rub</span></li>
                    <li>
                        <img width={18} height={18} src="/img/user.svg"/>
                    </li>
                </ul>

            </header>

            <div className="p-40  content">
                <h1 className={"mb-40"}>Все кроссовки</h1>
                <div className="d-flex flex-wrap justify-between sneakers">
                    <div className="card">
                        <img width={133} height={112} src={"/img/sneakers/1.jpg"} alt={"sneakers"}/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className={"d-flex justify-between align-center"}>
                            <div className={"d-flex flex-column"}>
                                <span>Цена</span>
                                <b>99 999</b>
                            </div>
                            <button className={"button"}>
                                <img width={11} height={11} src="/img/plus.svg" alt={"Plus"}/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src={"/img/sneakers/2.jpg"} alt={"sneakers"}/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className={"d-flex justify-between align-center"}>
                            <div className={"d-flex flex-column"}>
                                <span>Цена</span>
                                <b>12 999</b>
                            </div>
                            <button className={"button"}>
                                <img width={11} height={11} src="/img/plus.svg" alt={"Plus"}/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src={"/img/sneakers/3.jpg"} alt={"sneakers"}/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className={"d-flex justify-between align-center"}>
                            <div className={"d-flex flex-column"}>
                                <span>Цена</span>
                                <b>99 999</b>
                            </div>
                            <button className={"button"}>
                                <img width={11} height={11} src="/img/plus.svg" alt={"Plus"}/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img width={133} height={112} src={"/img/sneakers/4.jpg"} alt={"sneakers"}/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className={"d-flex justify-between align-center"}>
                            <div className={"d-flex flex-column"}>
                                <span>Цена</span>
                                <b>99 999</b>
                            </div>
                            <button className={"button"}>
                                <img width={11} height={11} src="/img/plus.svg" alt={"Plus"}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default App;
