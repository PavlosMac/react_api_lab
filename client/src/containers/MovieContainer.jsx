var React = require('react');
var MovieSelector = require('../components/MovieSelector');
var MovieDetail = require('../components/MovieDetail');

var MovieContainer = React.createClass({

  getInitialState: function(){
    return ({ movies: [] } )
  },
  componentDidMount: function () {
    var url = "http://netflixroulette.net/api/api.php?actor=Sam%20Neill";

    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function () {
      var data = JSON.parse(request.responseText);
      this.setState({
        movies: data,
        focusMovie: data[0]
      });
    }.bind(this);
    request.send(null);
  },

  render: function(){
    return(
      <div className="movie-container">
        <h2>Select A Sam Neill Movie</h2>
        <MovieSelector
          movies={this.state.movies}
          selectMovie={this.setFocusMovie}
          />
        <MovieDetail movie={this.state.focusMovie}/>
      </div>
    );
  },

  setFocusMovie: function (movie) {
    this.setState({focusMovie: movie})
  }
});

module.exports = MovieContainer;
