import { createContext, useState } from 'react'

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
})

function FavoritesContextProvider(props) {
    const [userFavs, setUserFavs] = useState([])
    
    function addFavHandler(favMeetup) {
        setUserFavs()
    }

    function removeFavHandler() {

    
    }

    function itemIsFav() {

    }


    const context = {
        favorites: userFavs,
        totalFavorites: userFavs.length
    }


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}