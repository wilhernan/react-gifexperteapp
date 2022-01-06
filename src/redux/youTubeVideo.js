export function setTittleVideo(tittle) {
    return {
        type: "SET_TITTLE_VIDEO",
        payload: tittle
    }
}

export function upvoteVideo() {
    return {
        type: "UPVOTE_VIDEO"        
    }
}

export function incrementViewCount() {
    return {
        type: "INCREMENT_VIEW_COUNT"        
    }
}

export function downvoteVideo() {
    return {
        type: "DOWNVOTE_VIDEO"        
    }
}

const initialState = {    
    tittle: "",
    viewCount: 0,
    votes: {
        up: 0,
        down: 0
    }    
}

export default function youTubeVideoReducer(youTubeVideo = initialState, action) {
    switch(action.type) {
        case "SET_TITTLE_VIDEO": 
            return {
                ...youTubeVideo, 
                tittle: action.payload
            }           
        case "DOWNVOTE_VIDEO":
            return {
                ...youTubeVideo,
                votes: {
                    ...youTubeVideo.votes,
                    down: youTubeVideo.votes.down + 1
                }                
            }
        case "UPVOTE_VIDEO":
            return  {
                ...youTubeVideo,
                votes: {
                    ...youTubeVideo.votes,
                    up: youTubeVideo.votes.up + 1
                }                
            }      
        case "INCREMENT_VIEW_COUNT":
            return {       
                ...youTubeVideo,
                viewCount: youTubeVideo.viewCount + 1
            }                
        default:
            return youTubeVideo
    }    
}