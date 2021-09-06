import React from "react";
import styles from './Card.module.scss'
import Loader from "../Loader/Loader";

const Card = (props) => {
	const {name, price, id, imageUrl, onClickFavorite, onClickPlus, favorited = false, added, load = false} = props
	const [isAdded, setIsAdded] = React.useState(added)
	const [isFavorite, setIsFavorite] = React.useState(favorited)


	const clickPlus = () => {
		onClickPlus({name, price, id, imageUrl})
		setIsAdded((v) => !v)
	}

	const clickFavorite = () => {
		onClickFavorite({name, price, id, imageUrl})
		setIsFavorite(prev => !prev)
	}
	if (load) {
		return <Loader/>
	}

	return (
		<div className={styles.card}>
			<div className={styles.favorite} onClick={clickFavorite}>
				<img src={isFavorite ? "/img/heart-like.svg" : "/img/heart-unlike.svg"} alt={"unliked"}/>
			</div>
			<img width={133} height={112} src={`/img/sneakers/${id}.jpg`} alt={"sneakers"}/>
			<h5>{name}</h5>
			<div className={"d-flex justify-between align-center"}>
				<div className={"d-flex flex-column"}>
					<span>Цена</span>
					<b>{price} руб.</b>
				</div>
				<img
					className={styles.plus}
					onClick={clickPlus}
					src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt={"Plus"}/>
			</div>
		</div>
	)
}


export default Card
