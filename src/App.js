import React from 'react';
import SearchBar from './components/SearchBar';
import youtubeApi from './components/youtubeApi';
import VideoList from './components/VideoList';

class App extends React.Component {
  state = { videos: [] };

  onSearchSubmit = async text => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: text
      }
    })
    this.setState({ videos: response.data.items }); 
  }

  render() {
    return (
      <div className= "ui container">
        <SearchBar onTextSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}


export default App;