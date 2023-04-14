import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./actionTypes"

export const addFav = (character) => {
    return {
        type: ADD_FAVORITE,
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAVORITE,
        payload: id
    }
}

export const filterCard = (gender)=>{
    return{
        type: FILTER,
        payload:gender
    }
}

export const orderCards = (id)=>{
    return{
        type: ORDER,
        payload:id
    }
}