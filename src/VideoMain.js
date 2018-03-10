import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

const VideoMain = ({main_video}) => {
if (main_video.length !== 0) {
  const videoId = main_video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

	return (
    <div>
      <div>
      <iframe style = {{height : 400, width : "100%"}} title = {url} src = {url}></iframe>
      </div>
      <Card>
        <CardBody>
          <CardTitle>{main_video.snippet.title}</CardTitle>
          <CardText>{main_video.snippet.description}</CardText>
        </CardBody>
      </Card>
    </div>
		);
} else {
	return (
		<h1>Loading</h1>
		);
}

}
export default VideoMain;


