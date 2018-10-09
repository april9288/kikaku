import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.requestVideosReducer.selectedVideo,
  }
}

const styles = {
  card: {
    maxWidth: 500,
  },
  media: {
    objectFit: 'cover',
  },
};

const VideoMain = ({ classes, selectedVideo }) => {

  let videoId = selectedVideo.id;
  let url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Card className="mainVideoContainer">
      <CardActionArea target="_blank" component="a" href={selectedVideo.link}>
        <CardMedia
          component="iframe"
          alt={selectedVideo.title}
          className={classes.media}
          height="400"
          src = {url}
          title={selectedVideo.title}
        />
        <CardContent>
          <Typography gutterBottom variant="title" align="left">
            {selectedVideo.title}
          </Typography>
          <Typography variant="body1" align="left">
            {selectedVideo.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" target="_blank" component="a" href={selectedVideo.link}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

VideoMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styledComponent = withStyles(styles)(VideoMain);
export default connect(mapStateToProps)(styledComponent);
         
