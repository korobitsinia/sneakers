import React from "react";

import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";

function App() {
    return (
        <div className="App clear">
            <Drawer/>
            <Header/>
            <div className="p-40  content">
                <div className={"d-flex align-center justify-between mb-40"}>
                    <h1>Все кроссовки</h1>
                    <div className={"search-block d-flex"}>
                        <img src={"/img/search.svg"} alt={"search"}/>
                        <input placeholder={"Search... "}/>
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-between sneakers">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>


        </div>
    );
}

export default App;
