import React from "react";
import styles from './Card.module.scss'

console.log(styles)
const Card = ({title, price, id}) => {

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src={"/img/heart-unlike.svg"} alt={"unliked"}/>
            </div>
            <img width={133} height={112} src={`/img/sneakers/${id + 1}.jpg`} alt={"sneakers"}/>
            <h5>{title}</h5>
            <div className={"d-flex justify-between align-center"}>
                <div className={"d-flex flex-column"}>
                    <span>Цена</span>
                    <b>{price} руб.</b>
                </div>
                <button onClick={() => console.log(`${id} add`)} className={"button"}>
                    <img width={11} height={11} src="/img/plus.svg" alt={"Plus"}/>
                </button>
            </div>
        </div>
    )
}

export default Card