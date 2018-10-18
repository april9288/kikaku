import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Progressbar from './Progressbar';
import VideoMain from './VideoMain';
import VideoLists from './VideoLists';
import ErrorComp from './ErrorComp';
import Footer from './Footer';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { requestVideosAction } from '../actions';

const mapStateToProps = (state) => {
  return {
    isPending: state.requestVideosReducer.isPending,
    error: state.requestVideosReducer.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onrequestVideosAction: () => dispatch(requestVideosAction())
  }
}


class Main extends Component {
  componentDidMount(){
    this.props.onrequestVideosAction();
  }

  render() {
    const { isPending, error } = this.props;
    return (
      <div>
          <SearchBar/>
            { isPending 
              ? <Progressbar />
              : error
              ? <ErrorComp />
              :(
                <section>
                  <Grid container justify="center" style={{width: "99%"}}>
                    <Grid item xs={12} sm={7} style={{display:"flex", justifyContent:"center", alignItems:"flex-start", margin: "3rem 0"}}>
                      <VideoMain/>
                    </Grid>
                    <Grid item xs={12} sm={4} style={{display:"flex", justifyContent:"center", margin: "3rem 0"}}>
                      <VideoLists/>
                    </Grid>
                  </Grid>
                  <Footer />
                </section>
                )
           }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);


