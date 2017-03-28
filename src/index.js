import _ from 'lodash';
import React, { Component } from 'react'; //dep
import ReactDOM from 'react-dom'; //dep
import ytSearch from 'youtube-api-search'; //dep
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyA5iBAoKE4IXylbiskEqHOdFX8uxMfQUik';

//create a new component. This component should produce some HTML
//a class is used when we want to have conept of state in component
class App extends Component {
  constructor(props) {
    //The super keyword is used to call functions on an object's parent.
    super(props);

    //this is a component level state that only belongs to this component
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
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term); //debounce takes this function and only calls it every 300 ms
      //basically says, "You can only trigger search term every 300 ms"
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
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
