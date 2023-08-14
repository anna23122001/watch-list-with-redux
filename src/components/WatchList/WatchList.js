import React from 'react';
import {connect} from 'react-redux';
import WatchItem from '../WatchItem/WatchItem'
import { deleteMovie, toggleMovie} from '../../store/actions/actions';

// import PropTypes from 'prop-types';

import './WatchList.css'

function WatchList({movies, deleteMovie, toggleMovie}) {
  return (
    <div>
      {movies.map((movie) => {
        return (
          <WatchItem
            key={movie.id}
            movie={movie}
            onDelete={deleteMovie}
            onToggle={toggleMovie}
          />
        )
      })}
    </div>     
  )}

// WatchList.propTypes = {
//   onToggle: PropTypes.func,
//   onDelete: PropTypes.func,
//   movies: PropTypes.array,
// }

// WatchList.defaultProps = {
//   movies: []
// }

const mapStateToProps = ({movies}) => ({movies})

const mapDispatchToProps = {deleteMovie, toggleMovie}

export default connect(mapStateToProps, mapDispatchToProps) (WatchList);


