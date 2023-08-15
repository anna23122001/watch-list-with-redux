import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import WatchItem from '../WatchItem/WatchItem'
import { getMovies } from '../../store/actions/actions'
import api from '../../watch-service'

import './WatchList.css'

function WatchList() {
  const movies = useSelector((store) => store.moviesList.movies);
  // второй вариант с деструктуризацией двойной
  // const {moviesList: {movies}} = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get('/')
      .then(({ data }) => dispatch(getMovies(data)))
      .catch(({status}) => console.log(status))
  }, [dispatch])

  
  return (
    <div>
      {movies.map((movie) => {
        return (
          <WatchItem
            key={movie.id}
            movie={movie}
          />
        )
      })}
    </div>     
  )}


export default WatchList;


