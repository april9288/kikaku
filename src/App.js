import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoLists from './VideoLists';
import VideoMain from './VideoMain';
import './App.css';
import YTSearch from 'youtube-api-search';
import { Container, Row, Col } from 'reactstrap';

const API_Key = 'AIzaSyDtccvVnz4_jP_E3u9KPOITfGWk29LyV44'
let term = '2018 trend';

class App extends Component {
  constructor() {
  	super();
  	this.state = {
  		videos: [],
      selected: []
  	};
    console.log("constructor");
    this.onSearchChange(term);
  }

  onSearchChange = (event) => {
    console.log("onSearchChange");
    if (event !== '2018 trend') {
      term = event.target.value;
    }
    YTSearch({key: API_Key, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selected: videos[0]
      });
    })
  }

  onClick = (selected) => {
    console.log("onClick");
    this.setState({selected});
  }

  render() {
    console.log("render");
    return (
      <Container style = {{maxWidth: 1400}}>
        <Row>
          <Col><h1>kikaku</h1></Col>
        </Row>
        <Row className = 'margin-3'>
          <Col xs="2" sm="2"></Col>
          <Col xs="8" sm="8">
          	<SearchBar 
              onInput = {this.onSearchChange}
             />
          </Col>
          <Col xs="2" sm="2"></Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md = "7" style = {{marginBottom : "15px"}}>
            <VideoMain main_video = {this.state.selected}/>
          </Col>
          <Col xs="12" sm="12" md = "5">
          	<VideoLists 
              videos = {this.state.videos.slice(1,5)}
              onClick = {this.onClick}
              />
          </Col>
        </Row>
        <Row style = {{margin: 30}}>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default App;




