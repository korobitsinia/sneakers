import Card from "../components/Card/Card";
import React from "react";


const Home = ({
				  items,
				  searchValue,
				  searchHandler,
				  onAddFavorite,
				  onAddToCart,
				  cartItems,
				  load
			  }) => {
	return (

		<div className="p-40  content">
			<div className={"d-flex align-center justify-between mb-40"}>
				<h1> {searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'} </h1>
				<div className={"search-block d-flex"}>
					<img src={"/img/search.svg"} alt={"search"}/>
					<input placeholder={"Search... "} onChange={searchHandler} value={searchValue}/>
				</div>
			</div>
			<div className="d-flex flex-wrap justify-between sneakers">
				{(items.length < 1) && Array(10).fill(1).map((i, idx) => (
					<Card key={idx} load={load}/>
				))}
				{items && items
					.filter((i) => i.name.includes(searchValue))
					.map((sneakers, idx) => (
						<Card key={idx}
							  name={sneakers.name}
							  price={sneakers.price}
							  imageUrl={sneakers.imageUrl}
							  id={sneakers.imageUrl.match(/\d+/)[0]}
							  added={cartItems.some((item) => Number(item.id) === Number(sneakers.id))}
							  onClickFavorite={(obj) => {
								  return onAddFavorite(obj)
							  }}
							  onClickPlus={(obj) => onAddToCart(obj)}
						/>
					))}
			</div>
		</div>
	)
}

export default Home