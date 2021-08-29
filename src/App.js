import React, {useEffect} from "react";
import axios from "axios";

import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";


function App() {
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [cartOpened, setCartOpened] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState("")

    useEffect(() => {
            axios.get("https://6128df510e3482001777b1e6.mockapi.io/items")
                .then((res) => setItems(res.data))
            axios.get("https://6128df510e3482001777b1e6.mockapi.io/cart")
                .then((res) => setCartItems(res.data))
        }
        , [])

    const handleToggleOpenCart = () => {
        setCartOpened((v) => !v)
    }

    const onAddToCart = (obj) => {
        let thisItemInCart = cartItems.find((item) => item.title === obj.title)
        if (!thisItemInCart) {
            axios.post("https://6128df510e3482001777b1e6.mockapi.io/cart", obj);
            setCartItems((value) => ([...value, obj]))
        }
    }

    const onDeleteFromCart = (id) => {
        // const newArrToCart = cartItems.filter((item) => item.title !== title)
        // setCartItems(() => newArrToCart)
        // axios.delete(`https://6128df510e3482001777b1e6.mockapi.io/cart/${id}`);

        console.log(id)
        setCartItems((prev) => prev.filter((i) => i.id !== id))
    }

    const searchHandler = (e) => {
        setSearchValue(prev => e.target.value)
    }

    return (
        <div className="App clear">
            {cartOpened &&
            <Drawer onClose={handleToggleOpenCart} items={cartItems} onDeleteFromCart={onDeleteFromCart}/>}
            <Header
                onClickCart={handleToggleOpenCart}/>
            <div className="p-40  content">
                <div className={"d-flex align-center justify-between mb-40"}>
                    <h1> {searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'} </h1>
                    <div className={"search-block d-flex"}>
                        <img src={"/img/search.svg"} alt={"search"}/>
                        <input placeholder={"Search... "} onChange={searchHandler} value={searchValue}/>
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-between sneakers">
                    {items
                        .filter((i) => i.name.includes(searchValue))
                        .map((sneakers, idx) => (
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
