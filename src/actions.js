import YoutubeFetch from 'youtube-search-promise';

export const searchFieldAction = (text) => ({
	type : 'CHANGE_SEARCH_FIELD',
	payload: text
})

export const requestVideosAction = (keyword) => (dispatch) => {
    dispatch({ type: "REQUEST_VIDEOS_PENDING" })
    const API_Key = process.env.REACT_APP_API_KEY_YOUTUBE;
    let searchTerm = keyword || "2018 javascript trends";
    YoutubeFetch(searchTerm, {  maxResults: 5, key: API_Key })
    .then(data => dispatch({ type: "REQUEST_VIDEOS_SUCCESS", payload: data }))
    .catch(error => dispatch({ type: "REQUEST_VIDEOS_FAILED", payload: true }))
}

export const requestVideosActionfromRelated = (selectedVideo, keyword) => (dispatch) => {
    dispatch({ type: "REQUEST_VIDEOS_PENDING" })
    const API_Key = process.env.REACT_APP_API_KEY_YOUTUBE;
    YoutubeFetch(keyword, {  maxResults: 5, key: API_Key })
    .then(data => {
    	let newpayload = [];
    	newpayload.push(selectedVideo, ...data);
    	dispatch({ type: "REQUEST_VIDEOS_SUCCESS", payload: newpayload })
    })
    .catch(error => dispatch({ type: "REQUEST_VIDEOS_FAILED", payload: true }))
}
