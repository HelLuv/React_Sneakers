
const Drawer = () => {
	return (
		<div style={{ display: "none" }} className="overlay">
			<div className="drawer d-flex justify-between	flex-column	">
				<div style={{ overflow: "auto" }}>
					<h2 className="mb-30">Корзина                <img className="removeBtn" src="/img/btn_remove.svg" alt="remove" /></h2>
					<div className="items">

						<div className="cartItem d-flex align-center mb-20">
							<div style={{ backgroundImage: 'url(/img/sneakers/11.jpg)', }} className="cartItemImg"></div>
							<div className="mr-20 flex">
								<p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
								<b>12 999 руб.</b>
							</div>
							<img className="removeBtn" src="/img/btn_remove.svg" alt="remove" />
						</div>

						<div className="cartItem d-flex align-center mb-20">
							<div style={{ backgroundImage: 'url(/img/sneakers/11.jpg)', }} className="cartItemImg"></div>
							<div className="mr-20 flex">
								<p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
								<b>12 999 руб.</b>
							</div>
							<img className="removeBtn" src="/img/btn_remove.svg" alt="remove" />
						</div>

					</div>
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

			</div>
		</div >
	)
};

export { Drawer };
