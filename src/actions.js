import YoutubeFetch from 'youtube-search-promise';

export const requestVideosAction = (keyword) => (dispatch) => {
    dispatch({ type: "REQUEST_VIDEOS_PENDING" })
    const API_Key = process.env.REACT_APP_API_KEY_YOUTUBE;
    let searchTerm = keyword || "overwatch d.va";
    YoutubeFetch(searchTerm, {  maxResults: 6, key: API_Key })
    .then(data => dispatch({ type: "REQUEST_VIDEOS_SUCCESS", payload: data }))
    .catch(error => dispatch({ type: "REQUEST_VIDEOS_FAILED", payload: true }))
}

export const requestVideosActionfromRelated = (selectedVideo, keyword) => (dispatch) => {
    dispatch({ type: "REQUEST_VIDEOS_PENDING" })
    const API_Key = process.env.REACT_APP_API_KEY_YOUTUBE;
    YoutubeFetch(keyword, {  maxResults: 6, key: API_Key })
    .then(data => {
    	let newpayload = [];
        let fetchedData = data;
        fetchedData = fetchedData.slice(1,5);
    	newpayload.push(selectedVideo, ...fetchedData);
    	dispatch({ type: "REQUEST_VIDEOS_SUCCESS", payload: newpayload })
    })
    .catch(error => dispatch({ type: "REQUEST_VIDEOS_FAILED", payload: true }))
}

