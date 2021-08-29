import React from "react";
import styles from './Card.module.scss'

const Card = ({title, price, id, imageUrl, onClickFavorite, onClickPlus}) => {

    const [isAdded, setIsAdded] = React.useState(false)

    const clickPlus = () => {
        onClickPlus({title, price, id, imageUrl})
        setIsAdded((v) => !v)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={"/img/heart-unlike.svg"} alt={"unliked"}/>
            </div>
            <img width={133} height={112} src={`/img/sneakers/${id + 1}.jpg`} alt={"sneakers"}/>
            <h5>{title}</h5>
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
