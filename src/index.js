import React, { Component } from 'react'; //dep
import ReactDOM from 'react-dom'; //dep
import ytSearch from 'youtube-api-search'; //dep
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyA5iBAoKE4IXylbiskEqHOdFX8uxMfQUik';

//create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    //The super keyword is used to call functions on an object's parent.
    super(props);

    this.state = { videos: []};

    ytSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      //ES6 syntax: this.setState({videos: videos}), works when key and prop are same name
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
