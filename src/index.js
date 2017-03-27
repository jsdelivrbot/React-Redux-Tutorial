import React, { Component } from 'react'; //dep
import ReactDOM from 'react-dom'; //dep
import ytSearch from 'youtube-api-search'; //dep
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyA5iBAoKE4IXylbiskEqHOdFX8uxMfQUik';

//create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    //The super keyword is used to call functions on an object's parent.
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('surfboards');
  }

  //this is a method on the App class that we can pass into the SearchBar component
  videoSearch(term){
    ytSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
      //ES6 syntax: this.setState({videos: videos}), works when key and prop are same name
    });
  }

  render(){
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          //defined fn that takes video that updates app's state w/ new video, if VideoList calls this fn, selected video on App updates, this is a property of VideoList
          videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
