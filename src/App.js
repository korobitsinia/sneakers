import React, {useEffect} from "react";

import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import {logDOM} from "@testing-library/react";

const arr = [
    {name: "Мужские Кроссовки Nike Blazer Mid Suede", price: "12999", imageUrl: "/img/sneakers/1.jpg"},
    {name: "Мужские Кроссовки Nike Air Max 270", price: "12999", imageUrl: "/img/sneakers/2.jpg"},
    {name: "Мужские Кроссовки Nike Blazer Mid Suede", price: "8999", imageUrl: "/img/sneakers/3.jpg"},
    {name: "Кроссовки Puma X Aka Boku Future Rider", price: "8999", imageUrl: "/img/sneakers/4.jpg"},
    {name: "Мужские Кроссовки Under Armour Curry 8", price: "15199", imageUrl: "/img/sneakers/5.jpg"},
    {name: "Мужские Кроссовки Nike Kyrie 7", price: "11299", imageUrl: "/img/sneakers/6.jpg"},
    {name: "Мужские Кроссовки Jordan Air Jordan 11", price: "10799", imageUrl: "/img/sneakers/7.jpg"},
    {name: "Мужские Кроссовки Nike LeBron XVIII", price: "16499", imageUrl: "/img/sneakers/8.jpg"},
    {name: "Мужские Кроссовки Nike Lebron XVIII Low", price: "13999", imageUrl: "/img/sneakers/9.jpg"},
    {name: "Мужские Кроссовки Nike Blazer Mid Suede", price: "8499", imageUrl: "/img/sneakers/10.jpg"},
    {name: "Кроссовки Puma X Aka Boku Future Rider", price: "8499", imageUrl: "/img/sneakers/11.jpg"},
    {name: "Мужские Кроссовки Nike Kyrie Flytrap IV", price: "11299", imageUrl: "/img/sneakers/12.jpg"},
]

function App() {

    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    useEffect(() => {
            const fetchData = async () => {
                const a = await fetch("https://6128df510e3482001777b1e6.mockapi.io/items")
                const b = await a.json()
                setItems(b)
            }
            fetchData()
        }
        , [])

    const [cartOpened, setCartOpened] = React.useState(false)
    const handleToggleOpenCart = () => {
        setCartOpened((v) => !v)
    }

    const onAddToCart = (obj) => {
        setCartItems((value) => ([...value, obj]))
    }

    return (
        <div className="App clear">
            {cartOpened && <Drawer onClose={handleToggleOpenCart} items={cartItems}/>}
            <Header
                onClickCart={handleToggleOpenCart}/>
            <div className="p-40  content">
                <div className={"d-flex align-center justify-between mb-40"}>
                    <h1>Все кроссовки</h1>
                    <div className={"search-block d-flex"}>
                        <img src={"/img/search.svg"} alt={"search"}/>
                        <input placeholder={"Search... "}/>
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-between sneakers">
                    {items.map((sneakers, idx) => (
                        <Card key={idx}
                              title={sneakers.name}
                              price={sneakers.price}
                              imageUrl={sneakers.imageUrl}
                              id={idx}
                              onClickFavorite={() => console.log('add to favorite')}
                              onClickPlus={(obj) => onAddToCart(obj)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
