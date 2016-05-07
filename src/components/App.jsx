
class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      searchResults: window.exampleVideoData
    };
    console.log('constructor', this);
  }
  onPlay(video) {
    this.setState({'currentVideo': video});
  }
  onSearch(event) {
    window.searchYouTube({q: event.target.value, maxResults: 5}, (results) => this.setState({'searchResults': results.items, 'currentVideo': results.items[0]}));
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