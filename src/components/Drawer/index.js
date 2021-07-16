import styles from './Drawer.module.scss';

const Drawer = ({ onClose, onRemove, items = [] }) => {
	return (
		<div className={styles.overlay}>
			<div className="drawer d-flex justify-between	flex-column	">
				<div style={{ overflow: "auto" }}>
					<h2 className="mb-30">Корзина <img onClick={onClose} className="removeBtn" src="/img/btn_remove.svg" alt="remove" /></h2>
					{
						items.length > 0
							? (<div>
								<div className={styles.items}>
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
											<b>21 498 руб. </b>
											<b></b>
										</li>
										<li>
											<span>Налог 5%: </span>
											<div></div>
											<b>1074 руб. </b>
										</li>
									</ul>
									<button className="greenButton">Оформить заказ <img src="/img/arrow_cart.svg" alt="arrow_cart" /></button>
								</div>
							</div>)

							: (<div className="cartEmpty d-flex align-center justify-center flex-column flex">
								<img className="mb-20" width={120} height={120} src="/img/empty_cart.jpg" alt="Empty Cart" />
								<h2>Корзина пустая</h2>
								<p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
								<button onClick={onClose} className="greenButton">
									<img className="pr-10" src="/img/arrow.svg" alt="Arrow" />
									Вернуться назад
								</button>
							</div>)
					}
				</div>
			</div>
		</div >
	)
};

export { Drawer };
