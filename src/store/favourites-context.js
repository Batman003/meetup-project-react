import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites : 0,
    addFavourite : (meetup) => {},
    removeFavourite : (meetupId) => {},
    itemIsFavourite : (meetupId) => {}
});

export function FavouritesContextProvider(props){
    const [userFavourites, setUserFavourites] = useState([]);

    const addFavouriteHandler = (favouriteMeetup) => {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.concat(favouriteMeetup);
        });
    }

    const removeFavouriteHandler = (favouriteId) => {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.filter((meetup) => meetup.id !== favouriteId);
        });
    }

    const itemIsFavouriteHandler = (favouriteId) => {
        return userFavourites.some(favourite => favourite.id === favouriteId);
    }

    const context = {
        favourites : userFavourites,
        totalFavourites : userFavourites.length,
        addFavourite : addFavouriteHandler,
        removeFavourite : removeFavouriteHandler,
        itemIsFavourite : itemIsFavouriteHandler
    };

    return (
        <FavouritesContext.Provider value={context}>
            {props.children}
        </FavouritesContext.Provider>
    );
}

export default FavouritesContext;