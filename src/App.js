import React, {useEffect} from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Home from "./pages/Home"
import {Route} from "react-router-dom"
import Favorites from "./pages/Favorites";


function App() {
    const [items, setItems] = React.useState([])
    const [favorites, setFavorites] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [cartOpened, setCartOpened] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState("")

    useEffect(() => {
            axios.get("https://6128df510e3482001777b1e6.mockapi.io/items")
                .then((res) => setItems(res.data))
            axios.get("https://6128df510e3482001777b1e6.mockapi.io/cart")
                .then((res) => setCartItems(res.data))
            axios.get("https://6128df510e3482001777b1e6.mockapi.io/favorite")
                .then((res) => setFavorites(res.data))
        }
        , [])

    // useEffect(() => {
    //     console.log('items', items)
    //     console.log('favorites', favorites)
    //     console.log('cartItems', cartItems)

    // }, [items, favorites, cartItems])

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

    const onAddFavorite = async (obj) => {
        try {
            if (favorites.find((el) => el.id == obj.id)) {
                console.log('fav delete', obj)
                axios.delete(`https://6128df510e3482001777b1e6.mockapi.io/favorite/${obj.id}`);
                // setFavorites((prev) => prev.filter((i) => i.id !== obj.id))
            } else {
                console.log('fav add', obj)
                const {data} = await axios.post("https://6128df510e3482001777b1e6.mockapi.io/favorite", obj);
                setFavorites((value) => [...value, data])
            }
        } catch (e) {
            console.log(e)
            alert('Не удалось добавить')
        }
    }

    const onDeleteFromCart = (id) => {
        axios.delete(`https://6128df510e3482001777b1e6.mockapi.io/cart/${id}`);
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
            <Route path="/" exact>
                <Home
                    items={items}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    searchHandler={searchHandler}
                    onAddFavorite={onAddFavorite}
                    onAddToCart={onAddToCart}
                    cartOpened={cartOpened}
                    handleToggleOpenCart={handleToggleOpenCart}
                    cartItems={cartItems}
                    onDeleteFromCart={onDeleteFromCart}
                />
            </Route>
            <Route path="/favorites" exact>
                <Favorites items={favorites}
                           onClickFavorite={(obj) => onAddFavorite(obj)}
                           onClickPlus={(obj) => onAddToCart(obj)}
                />
            </Route>
        </div>
    )
}

export default App;
