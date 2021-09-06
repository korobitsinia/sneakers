import React from "react";
import Card from "../components/Card/Card";
import {AppContext} from "../App";


const Favorites = ({items, onClickFavorite, onClickPlus, cartItems, load}) => {

	const state = React.useContext(AppContext)
	return (
		<div className="p-40  content">
			<div className={"d-flex flex-column"}>
				<h1 className={"mb-40"}>Мои закладки</h1>
				<div className="d-flex flex-wrap justify-between sneakers">
					{items
						.map((sneakers, idx) => (
							<Card key={idx}
								  load={load}
								  name={sneakers.name}
								  price={sneakers.price}
								  imageUrl={sneakers.imageUrl}
								  id={sneakers.imageUrl.match(/\d+/)[0]}
								  favorited={true}
								  added={cartItems.some((item) => Number(item.id) === Number(sneakers.id))}
								  onClickFavorite={(obj) => onClickFavorite(obj)}
								  onClickPlus={(obj) => onClickPlus(obj)}
							/>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Favorites