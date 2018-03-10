import React from 'react';
import { Container, Row, Col } from 'reactstrap';

let mystyle = {
	padding: "10px",
  textAlign: 'left'
}

let mystyle2 = {
  padding: "10px",
  textAlign: 'left',
  fontWeight:'bold'
}

const VideoItem = ({video, onClick}) => {
  if (video) {
    const title = video.snippet.title.substr(0, 50);
    const desc = video.snippet.description.substr(0, 100);
    const img = video.snippet.thumbnails.default.url;

    return (
    <Container onClick = {()=> onClick(video)}>
      <Row>
        <Col style = {mystyle} xs="12" sm="12" md = "12"><img src = {img} alt = "got it"/></Col>
        <Col style = {mystyle2} xs="12" sm="12" md = "12">{title}</Col>
        <Col style = {mystyle} xs="12" sm="12" md = "12">{desc}</Col>
      </Row>
    </Container>
      );
  } else {
    return (
    <Container>
      <Row>
        <Col style = {mystyle} xs="12" sm="4">img</Col>
        <Col style = {mystyle} xs="12" sm="4">title</Col>
        <Col style = {mystyle} xs="12" sm="4">description</Col>
      </Row>
    </Container>
      );
  }






}
export default VideoItem;


