import React from 'react';
import SearchBar from './components/SearchBar';
import youtubeApi from './components/youtubeApi';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSearchSubmit = async text => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: text
      }
    })
    this.setState({ videos: response.data.items }); 
  }


  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className= "ui container">
        <SearchBar onTextSubmit={this.onSearchSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    )
  }
}


export default App;