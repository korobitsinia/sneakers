import React from "react";

import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import {logDOM} from "@testing-library/react";

const arr = [
    {name: "Мужские Кроссовки Nike Blazer Mid Suede", price: "12999"},
    {name: "Мужские Кроссовки Nike Air Max 270", price: "12999"},
    {name: "Мужские Кроссовки Nike Blazer Mid Suede", price: "8999"},
    {name: "Кроссовки Puma X Aka Boku Future Rider", price: "8999"},
    {name: "Мужские Кроссовки Under Armour Curry 8", price: "15199"},
    {name: "Мужские Кроссовки Nike Kyrie 7", price: "11299"},
    {name: "Мужские Кроссовки Jordan Air Jordan 11", price: "10799"},
    {name: "Мужские Кроссовки Nike LeBron XVIII", price: "16499"},
    {name: "Мужские Кроссовки Nike Lebron XVIII Low", price: "13999"},
    {name: "Мужские Кроссовки Nike Blazer Mid Suede", price: "8499"},
    {name: "Кроссовки Puma X Aka Boku Future Rider", price: "8499"},
    {name: "Мужские Кроссовки Nike Kyrie Flytrap IV", price: "11299"},
]

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
                    {arr.map((sneakers, idx) => (
                        <Card key={idx}
                              title={sneakers.name}
                              price={sneakers.price}
                              id={idx}/>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default App;
