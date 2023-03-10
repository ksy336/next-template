// "use client";
import React, { useEffect, useState } from 'react';
import { IProduct } from '@/modules/Cards/Cards-types';
type ContextType = {
  children: React.ReactNode;
};

const Context = React.createContext({});

function ContextProvider({ children }: ContextType) {
  const initialState: IProduct[] = [];
  const initialStateForFavorites = 0;
  const initialStateForHeart: number[] = [];
  const initialStateForId: number[] = [];
  const initialFavourites: [] = [];
  const [cartItems, setCartItems] = useState(initialState);
  const [redHeart, setRedHeart] = useState(initialStateForHeart);
  const [numberOfFavorites, setNumberOfFavourites] = useState(initialStateForFavorites);
  const [cartItemsIds, setCartItemsIds] = useState(initialStateForId);
  const [favoriteProducts, setFavoriteProducts] = useState(initialFavourites);

  useEffect(() => {
    const redHeartData = JSON.parse(localStorage.getItem('redHeart') as string);
    if (redHeartData) {
      setRedHeart(redHeartData);
    }
  }, []);
  useEffect(() => {
    if (redHeart !== initialStateForHeart) {
      localStorage.setItem('redHeart', JSON.stringify(redHeart));
    }
  }, [redHeart]);

  useEffect(() => {
    const numberOfFavoritesData = JSON.parse(localStorage.getItem('numberOfFavorites') as string);
    if (numberOfFavoritesData) {
      setNumberOfFavourites(numberOfFavoritesData);
    }
  }, []);

  useEffect(() => {
    if (numberOfFavorites !== initialStateForFavorites) {
      localStorage.setItem('numberOfFavorites', JSON.stringify(numberOfFavorites));
    }
  }, [numberOfFavorites]);

  useEffect(() => {
    const cartItemsData = JSON.parse(localStorage.getItem('cartItems') as string);
    if (cartItemsData) {
      setCartItems(cartItemsData);
    }
  }, []);
  useEffect(() => {
    // console.log(`Cartitems:`,cartItems)
    if (cartItems !== initialState) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);
  useEffect(() => {
    const idData = JSON.parse(localStorage.getItem('idArray') as string);
    if (idData) {
      setCartItemsIds(idData);
    }
  }, []);
  useEffect(() => {
    if (cartItemsIds !== initialStateForId) {
      localStorage.setItem('idArray', JSON.stringify(cartItemsIds));
    }
  }, [cartItemsIds]);
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') as string);
    if (favorites) {
      setFavoriteProducts(favorites);
    }
  }, []);
  useEffect(() => {
    if (favoriteProducts !== initialFavourites) {
      localStorage.setItem('favorites', JSON.stringify(favoriteProducts));
    }
  }, [favoriteProducts]);
  function addToCart(newItem: IProduct) {
    // @ts-ignore
    setCartItems((prev: any) => [...prev, newItem]);
  }

  return (
    <Context.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        numberOfFavorites,
        setNumberOfFavourites,
        redHeart,
        setRedHeart,
        cartItemsIds,
        setCartItemsIds,
        favoriteProducts,
        setFavoriteProducts
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
