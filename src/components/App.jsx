
class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentVideo: {id: {}, snippet: {thumbnails: {medium: {}}}},
      searchResults: []
    };
    this.onSearch('');
  }
  onPlay(video) {
    this.setState({'currentVideo': video});
  }
  onSearch(query) {
    window.searchYouTube({query: query, max: 5, key: window.YOUTUBE_API_KEY}, (results) => this.setState({'searchResults': results, 'currentVideo': results[0]}));
  }

  render () {
    return (
      <div>
        <Nav onSearch={this.onSearch.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.searchResults} onPlay={this.onPlay.bind(this)} />
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;