var searchYouTube = (options, callback) => {
  var key = options.key || '';
  var query = options.query || '';
  var max = options.max || 5;
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      q: query,
      maxResults: max,
      key: key
    },
    dataType: 'json',
    success: (data) => callback(data.items),
    error: (data) => console.log('error', JSON.stringify(data, null, 2))
  });
};
window.searchYouTube = searchYouTube;