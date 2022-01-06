/* import { heroes } from "./data/heroes" */

import React from "react"
import ReactDOM from "react-dom"

import GifExpertApp from "./components/GifExpertApp"
/* import FirstApp from "./App"; */
/* import CounterApp from "./CounterApp"; */
import "./index.css"

/* import App from "./App"
import {Provider} from "react-redux"
import store from "./redux"

///import App2 from "./App2"
*/
ReactDOM.render(    
    <GifExpertApp />,    
    document.getElementById("root")
) 
/* const getImgage = async() => {
    const apiKey = 'bKcYC37EZHY15W9iye5a7AGkys0qb8HS'
    const resp = await(fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`));
    const {data} = await resp.json();
    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}

getImgage() */
/* 
const divRoot = document.querySelector('#root');
ReactDOM.render( <CounterApp value={ 7 }/>, divRoot);  */

/* http_Post
    .then( resp => resp.json() )  
    .then( ({data}) => {
        const { url } = data.images.original
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })  
    .catch( console.warn ) */


/* import store from "./redux"
import {changeCount} from "./redux/count"
import {removeFavoriteThings, addFavoriteThings} from "./redux/favoriteThings"
import {setTittleVideo, upvoteVideo, incrementViewCount, downvoteVideo} from "./redux/youTubeVideo"
import {setUserDetails, removeUserDetails} from "./redux/user" 


store.dispatch(changeCount("21"))
store.dispatch(addFavoriteThings("I love the Soccer"))
store.dispatch(addFavoriteThings("I love the Soccer and the Pizza"))
store.dispatch(removeFavoriteThings("I love the Soccer"))
store.dispatch(setTittleVideo("Shakira Dorado"))
store.dispatch(upvoteVideo())
store.dispatch(downvoteVideo())
store.dispatch(incrementViewCount())
store.dispatch(setUserDetails({
    FirstName: "Will",
    LastName: "Hernández",
    Id: 1,
    Email: "wilhernan@gmail.com"
}))
store.dispatch(setUserDetails({   
    Email: "wilhernan777@gmail.com"
}))
store.dispatch(removeUserDetails())
 */