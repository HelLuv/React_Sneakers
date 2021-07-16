import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";
import { useEffect, useState } from 'react';
import * as axios from 'axios';
import { Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Favorites } from './pages/Favorites';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false);

  const instance = axios.create({
    baseURL: 'https://60edf22ceb4c0a0017bf42cc.mockapi.io/',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });

  useEffect(() => {
    instance.get('items')
      .then((res) => {
        setItems(res.data)
      });
    instance.get('cart')
      .then((res) => {
        setCartItems(res.data)
      });
    instance.get('favorites')
      .then((res) => {
        setFavorites(res.data)
      });
  }, []);

  const onAddToCart = (obj) => {
    instance.post('cart', obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    instance.delete(`cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        instance.delete(`favorites/${obj.id}`);
        setFavorites((prev) => prev.filter(item => item.id !== obj.id));
      } else {
        const { data } = await instance.post('favorites', obj);
        setFavorites(prev => [...prev, data]);
      }

    } catch (error) {
      alert('Не удалось добавить в закладки!');
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };


  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <Route path='/' exact>
        <Home
          items={items}
          searchValue={searchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route >

      <Route path='/favorites' exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
    </div>


  );
}

export { App };
