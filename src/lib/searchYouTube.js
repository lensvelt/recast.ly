var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: $.extend(options, {
      part: 'snippet',
      key: window.YOUTUBE_API_KEY
    }),
    dataType: 'json',
    success: (data) => callback(data),
    error: (data) => console.log('error', JSON.stringify(data, null, 2))
  });
};
window.searchYouTube = searchYouTube;