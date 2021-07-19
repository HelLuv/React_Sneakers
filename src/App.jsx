import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";
import { createContext, useEffect, useState } from 'react';
import * as axios from 'axios';
import { Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Favorites } from './pages/Favorites';
import { Orders } from './pages/Orders';

export const AppContext = createContext({});

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const instance = axios.create({
    baseURL: 'https://60edf22ceb4c0a0017bf42cc.mockapi.io/',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResp, favoritesResp, itemsResp] = await Promise.all([
          instance.get('cart'), instance.get('favorites'), instance.get('items')
        ])


        setIsLoading(false);
        setCartItems(cartResp.data);
        setFavorites(favoritesResp.data);
        setItems(itemsResp.data);
      } catch (error) {
        alert('Ошибка при получении данных :(')
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await instance.delete(`cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await instance.post('cart', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину');
    }
  };

  const onRemoveItem = async (id) => {
    try {
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
      await instance.delete(`cart/${id}`);
    } catch (error) {
      alert('Ошибка при удалении из корзины');
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        instance.delete(`favorites/${obj.id}`);
        setFavorites((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));
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

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }


  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      favorites,
      instance,
      isItemAdded,
      onAddToFavorite,
      onAddToCart,
      setCartOpened,
      setCartItems,
    }}>
      <div className="wrapper clear">

        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

        <Header onClickCart={() => setCartOpened(true)} />

        <Route path='/' exact>
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />
        </Route >

        <Route path='/favorites' exact>
          <Favorites />
        </Route>

        <Route path='/orders' exact>
          <Orders />
        </Route>


      </div>

    </AppContext.Provider>

  );
}

export { App };
