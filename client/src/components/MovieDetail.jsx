var React = require('react');

var MovieDetail = function (props) {
  if(!props.movie) {
    return <h4>No movie selected</h4>
  }
  return (
    <div>
      <h3>{props.movie.show_title}</h3>
      <p>{props.movie.release_year}</p>
      <img src={props.movie.poster}/>
      <p>{props.movie.summary}</p>
    </div>
  );
};

module.exports = MovieDetail;
