import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { requestVideosActionfromRelated } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onrequestVideosActionfromRelated: (selectedVideo, keyword) => dispatch(requestVideosActionfromRelated(selectedVideo, keyword))
  }
}

const styles = {
  card: {
    width: 350,
  },
  media:{
    width: 120,
    height: 90
  }
};

const VideoItem = ({ classes, youtubeVideo, onrequestVideosActionfromRelated }) => {

    let title = youtubeVideo.title.substr(0, 50);
    let desc = youtubeVideo.description.substr(0, 100);
    let img = youtubeVideo.thumbnails.default.url;

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={()=>onrequestVideosActionfromRelated(youtubeVideo, title)}>
        <CardMedia
          className={classes.media}
          component="img"
          src={img}
          title={title}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="subheading" align="left">
            {title}
          </Typography>
          <Typography variant="body1" align="left">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

VideoItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styledComponent = withStyles(styles)(VideoItem);
export default connect(undefined, mapDispatchToProps)(styledComponent);