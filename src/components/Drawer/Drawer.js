import React from "react";

const Drawer = ({onClose, items = [], onDeleteFromCart}) => {
    return (
        <div className="overlay" onClick={onClose}>
            <div className="drawer" onClick={(e) => e.stopPropagation()}>
                <h2 className={"mb-30 d-flex justify-between"}> Корзина
                    <img className={"removeBtn"} src={"/img/btn-remove.svg"} alt={"Remove"} onClick={onClose}/>
                </h2>

                {items.length ?
                    // ITEMS IN CART
                    (<>
                        <div className="items">
                            {items.map(({id, title, price, imageUrl}, idx) => (
                                <div className="cartItem d-flex align-center mb-20" key={idx}>
                                    <div style={{backgroundImage: `url(${imageUrl})`}}
                                         className="cartItemImg"> </div>
                                    <div className={"mr-20 flex"}>
                                        <p className={"mb-5"}>{title}</p>
                                        <b>{price} руб.</b>
                                    </div>
                                    <img className={"removeBtn"} src={"/img/btn-remove.svg"} alt={"Remove"}
                                         onClick={() => onDeleteFromCart(id)}/>
                                </div>
                            ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div> </div>
                                    <b>21 498 руб.</b>
                                </li>
                                <li><span>Налог 5%</span>
                                    <div> </div>
                                    <b>1 000 руб.</b>
                                </li>
                            </ul>
                            <button className={"greenButton"}>
                                Оформить заказ
                                <img src={"/img/arrow.svg"} alt={"Arrow"}/>
                            </button>
                        </div>
                    </>) :
                    // EMPTY CART
                    (<div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img className="mb-20" width="120px" src="/img/empty.png" alt="Empty"/>
                        <h2>Корзина пуста</h2>
                        <p className="opacity-6">Добавьте хотя бы одну пару кросовок</p>
                        <button className="greenButton">
                            <img src="img/arrow.svg" alt="Arrow"/>
                            Вернуться назад
                        </button>
                    </div>)}


            </div>
        </div>
    )
}

export default Drawer

