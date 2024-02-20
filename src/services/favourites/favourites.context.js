import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const SaveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
    } catch (error) {
      console.log("error storing", error);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (error) {
      console.log("error loading", error);
    }
  };

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );

    setFavourites(newFavourites);
  };

  useEffect(() => {
    SaveFavourites(favourites);
  }, [favourites]);

  useEffect(() => {
    loadFavourites();
  }, []);
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
