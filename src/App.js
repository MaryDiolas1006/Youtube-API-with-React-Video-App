import React from 'react';
import SearchBar from './components/SearchBar';
import youtubeApi from './components/youtubeApi';

class App extends React.Component {

  onSearchSubmit = text => {
    youtubeApi.get('/search', {
      params: {
        q: text
      }
    })
  }

  render() {
    return (
      <div className= "ui container">
        <SearchBar onTextSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}


export default App;