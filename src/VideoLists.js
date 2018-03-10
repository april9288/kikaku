import React from 'react';
import VideoItem from './VideoItem';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './VideoLists.css';

const VideoLists = ({videos, onClick}) => {
if (videos) {
	const new_list = videos.map((video, i) => {
			return (<ListGroupItem className = "listhover" key = {video.etag} >
						<VideoItem 
							key = {video.etag} 
							onClick = {onClick}
							video = {video}
							/>
					</ListGroupItem>);
					});

	return (
	      <ListGroup>
	      	<ListGroupItem style = {{fontWeight:'bold'}}><h4>Related Videos</h4></ListGroupItem>
	      	{new_list}
	      </ListGroup>
		);
} else {
	return (
	      <ListGroup>
	      </ListGroup>
		);
}




}
export default VideoLists;


