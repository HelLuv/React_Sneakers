import { Card } from "../components/Card";

export const Home = ({
	items,
	searchValue,
	onChangeSearchInput,
	onAddToFavorite,
	onAddToCart,
	isLoading }) => {


	const renderItems = () => {
		const filteredItems = items.filter(
			(item) => item.name.toLowerCase().includes(searchValue.toLowerCase())
		);

		return (isLoading ? [...Array(8)] : filteredItems).map((item, index) =>
			<Card
				key={index}
				onPlus={(obj) => onAddToCart(obj)}
				onFavorite={(obj) => onAddToFavorite(obj)}
				loading={isLoading}
				{...item}
			/>)
	}

	return (
		<div className="content p-40">
			<div className="d-flex align-center justify-between mb-40">
				<h1 >{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
				<div className="search-block d-flex">
					<img src="/img/search.svg" alt="Search" />
					<input className="search" onChange={onChangeSearchInput} type="search" placeholder="Поиск" />
				</div>
			</div>

			<div style={{ justifyContent: "space-evenly" }} className="d-flex flex-wrap">
				{
					renderItems()
				}
			</div>
		</div>
	)
}
