import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteMovie, toggleMovie } from '../../store/actions/actions';
import api from '../../watch-service'
import './WatchItem.css';


function toggleBackground(movie) {
    return {
        backgroundColor: movie.isDone ? 'cadetblue' : 'darkgoldenrod'
    }
}

function WatchItem({movie}) {
   const dispatch = useDispatch();

   function onMovieDelete(e) {
      e.stopPropagation();
      api.delete(`/${movie.id}`)
         .then(({ status }) => { return status });
      dispatch(deleteMovie(movie.id)) 
   };

   function onToggle(e) {
      e.stopPropagation();
      api.put(`/${movie.id}`, movie)
         .then(({ data }) => dispatch(toggleMovie(data.id)))
         .catch(({ status }) => console.log(status))
   }

  return (
     <div 
        className='watch-item'
        style={toggleBackground(movie)}
        onClick={onToggle}>
       <p className='content'>
          {movie.title} produced by {movie.director}
       </p>
       <span 
       className='delete-btn'
           onClick={onMovieDelete}
        >
          X
       </span>
    </div>
  )
}

export default WatchItem