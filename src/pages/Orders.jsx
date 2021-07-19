import { useContext, useState, useEffect } from "react";
import { Card } from "../components/Card"
import { AppContext } from './../App';

export const Orders = () => {
	const [orders, setOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(true);


	const { instance, onAddToFavorite } = useContext(AppContext);

	useEffect(() => {
		(async () => {
			try {
				const { data } = await instance.get('orders');
				// console.log(data.map((obj) => obj.items).flat());
				setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
				setIsLoading(false);
			} catch (error) {
				alert('Не удалось получить заказы');
				console.log(error);
			}
		})();
	}, []);

	return (
		<div className="content p-40">
			<div className="d-flex align-center justify-between mb-40">
				<h1 >Мои заказы</h1>
			</div>

			<div style={{ justifyContent: "space-evenly" }} className="d-flex flex-wrap">
				{(isLoading ? [...Array(8)] : orders).map((item, index) =>
					<Card
						key={index}
						onFavorite={(obj) => onAddToFavorite(obj)}
						loading={isLoading}
						{...item}
					/>)
				}
			</div>
		</div>
	)
}
