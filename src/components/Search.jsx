
var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={(event) => props.onSearch(event.target.value)}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

window.Search = Search;