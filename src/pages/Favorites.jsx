import { useContext } from "react";
import { Card } from "../components/Card"
import { AppContext } from './../App';

export const Favorites = () => {
	const { favorites, onAddToFavorite } = useContext(AppContext);

	return (
		<div className="content p-40">
			<div className="d-flex align-center justify-between mb-40">
				<h1 >Мои закладки</h1>

			</div>

			<div style={{ justifyContent: "space-evenly" }} className="d-flex flex-wrap">
				{
					favorites.map((item, index) =>
						<Card
							key={item.name + index}
							favorited={true}
							onFavorite={onAddToFavorite}
							{...item}
						/>)
				}
			</div>
		</div>
	)
}
