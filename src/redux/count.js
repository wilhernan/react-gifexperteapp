export function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

export function incrementCount() {
    return (dispatch, getState) => { 
        const number = getState()
        const baseUrl = "https://swapi.co/api/people"
        fetch(`${baseUrl}/${number}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                dispatch({
                    type: "INCREMENT_COUNT",
                    payload: res
                }) 
            })
    }
}

export function decrementCount() {
    return {
        type: "DECREMENT_COUNT"
    }
}

export default function countReducer(count = 0, action) {
    switch(action.type) {
        case "CHANGE_COUNT": 
            return count + action.payload
        case "INCREMENT_COUNT": 
            return count + 1
        case "DECREMENT_COUNT": 
            return count - 1 
        default:
            return count      
    }
}