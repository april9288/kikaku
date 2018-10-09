import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import VideoItem from './VideoItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    relatedVideos: state.requestVideosReducer.relatedVideos,
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: theme.palette.background.paper,
  },
});


class VideoLists extends React.Component {
  render() {
    const { classes, relatedVideos } = this.props;
    const ListOfVideos = relatedVideos.map((video) => {
		return (<ListItem key = {video.id} >
					<VideoItem 
						key = {video.id} 
						youtubeVideo = {video}
						/>
				</ListItem>);
				});

    return (
      <div className={classes.root}>
        <List subheader={<ListSubheader component="div" disableSticky>Related Videos</ListSubheader>}>
        {ListOfVideos}
        </List>
      </div>
    );
  }
}

VideoLists.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styledComponent = withStyles(styles)(VideoLists);
export default connect(mapStateToProps)(styledComponent);