export function addFavoriteThings(things) {
    return {
        type: "ADD_FAVORITE_THINGS",
        payload: things
    }
}

export function removeFavoriteThings(things) {
    return {
        type: "REMOVE_FAVORITE_THINGS",
        payload: things
    }
}

export default function favoriteThingsReducer(favoriteThings = [], action) {
    switch(action.type) {
        case "ADD_FAVORITE_THINGS":
            return [...favoriteThings, action.payload]           
        case "REMOVE_FAVORITE_THINGS": {
            const updateArr = favoriteThings.filter(things => things.toLowerCase() !==
            action.payload.toLowerCase() )
            return updateArr
        }
        default:
            return favoriteThings      
    }
}