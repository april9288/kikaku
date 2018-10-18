const initialStateVideos = {
  selectedVideo: '',
  relatedVideos: '',
  isPending: true,
  error: false
}

export const requestVideosReducer = (state=initialStateVideos, action={}) => {
  switch (action.type) {
    case "REQUEST_VIDEOS_PENDING":
      return Object.assign({}, state, {isPending: true})
    case "REQUEST_VIDEOS_SUCCESS":
      return Object.assign({}, state, {selectedVideo: action.payload[0], relatedVideos: action.payload.slice(1,5), isPending: false})
    case "REQUEST_VIDEOS_FAILED":
      return Object.assign({}, state, {error: action.payload, isPending: false})
    default:
      return state
  }
}
