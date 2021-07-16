import { Card } from "../components/Card"

export const Favorites = ({ items, onAddToFavorite }) => {
	return (
		<div className="content p-40">
			<div className="d-flex align-center justify-between mb-40">
				<h1 >Мои закладки</h1>

			</div>

			<div style={{ justifyContent: "space-evenly" }} className="d-flex flex-wrap">
				{
					items.map((item, index) =>
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
