import { useState } from 'react';
import { useContext } from 'react';

import { useCart } from './../../hooks/useCart';
import { AppContext } from './../../App';
import { Info } from '../Info';

import styles from './Drawer.module.scss';


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onClose, onRemove, opened, items = [] }) => {

	const { instance } = useContext(AppContext);
	const { cartItems, setCartItems, totalPrice } = useCart();
	const [isOrderCompleted, setIsOrderCompleted] = useState(false);
	const [orderId, setOrderId] = useState(null);
	const [isLoading, setIsLoading] = useState(false);


	const onClickOrder = async () => {
		try {
			setIsLoading(true);
			const { data } = await instance.post('orders', {
				items: cartItems
			});
			setOrderId(data.id);
			setIsOrderCompleted(true);
			setCartItems([]);

			for (let i = 0; i < cartItems.length; i++) {
				const item = cartItems[i];
				await instance.delete('cart/' + item.id);
				await delay(1000);
			}
		} catch (error) {
			alert('Не удалось создать заказ :(');
		}
		setIsLoading(false);
	};

	return (
		<div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
			<div className={`${styles.drawer} d-flex justify-between flex-column`}>
				<div className="d-flex flex-column flex justify-between" style={{ overflow: "auto" }}>
					<h2 className="mb-30 d-flex justify-between">Корзина <img onClick={onClose} className={styles.removeBtn} src="/img/btn_remove.svg" alt="remove" /></h2>
					{
						items.length > 0
							? (<>
								<div className={styles.items} style={{ overflow: "auto" }}>
									{items.map((obj, index) => (
										<div key={obj.name + obj.imageUrl + index} className="cartItem d-flex align-center mb-20">
											<div style={{ backgroundImage: `url(${obj.imageUrl})`, }} className="cartItemImg"></div>
											<div className="mr-20 flex">
												<p className="mb-5">{obj.name}</p>
												<b>{(obj.price).toLocaleString('ru')} руб.</b>
											</div>
											<img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn_remove.svg" alt="remove" />
										</div>))}
								</div>
								<div className="cardTotalBlock mt-50">
									<ul>
										<li>
											<span>Итого: </span>
											<div></div>
											<b>{totalPrice} руб. </b>
											<b></b>
										</li>
										<li>
											<span>Налог 5%: </span>
											<div></div>
											<b>{totalPrice * 0.05} руб. </b>
										</li>
									</ul>
									<button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ
										<img src="/img/arrow_cart.svg" alt="arrow_cart" />
									</button>
								</div>
							</>)

							: (
								<Info
									title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"}
									description={isOrderCompleted ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
									image={isOrderCompleted ? "/img/complete_order.jpg" : "/img/empty_cart.jpg"}
								/>
							)
					}
				</div>
			</div>
		</div >
	)
};

export { Drawer };
