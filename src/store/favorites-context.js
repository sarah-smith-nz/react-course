import { createContext, useState } from 'react'

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
})

export function FavoritesContextProvider(props) {
    const [userFavs, setUserFavs] = useState([])
    
    function addFavHandler(favMeetup) {
        setUserFavs((prevUserFavs) => {
            return prevUserFavs.concat(favMeetup)
        })  //dont us this: userFavs.concat(favMeetup)
    } //will always ensure we get the latest user updates status because don in right order

    function removeFavHandler(meetupId) { // expect a meetupID which identifies the meetup
        setUserFavs(prevUserFavs => {
            return prevUserFavs.filter(meetup => meetup.id !== meetupId) //drop the item that matches returning an array with out the meetup id. 
        })
    
    }

    function itemIsFavHandler() {
        return userFavs.some(meetup => meetup.id === meetupId)  //check if given id is the id
    }


    const context = {
        favorites: userFavs,
        totalFavorites: userFavs.length,
        addFavorite: addFavHandler,
        removeFavorite: removeFavHandler,
        itemIsFavorite: itemIsFavHandler
    }


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext