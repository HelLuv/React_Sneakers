import { Card } from "./components/Card";
import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";

const arr = [
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: "/img/sneakers/5.jpg" },
  { name: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl: "/img/sneakers/2.jpg" },
  { name: 'Мужские Кроссовки Under Armour Curry 8', price: 9999, imageUrl: "/img/sneakers/3.jpg" },
  { name: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799, imageUrl: "/img/sneakers/7.jpg" },
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="search" placeholder="Поиск" />
          </div>
        </div>

        <div className="d-flex">
          {
            arr.map((obj, index) =>
              <Card
                {...obj}
                onClick={() => console.log(obj)}
                key={obj.name + index}
              />)
          }
        </div>
      </div>
    </div>
  );
}

export { App };
