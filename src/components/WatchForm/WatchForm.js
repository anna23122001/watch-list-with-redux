import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addMovie } from '../../store/actions/actions'
import api from '../../watch-service';

function WatchForm() {
    const dispatch = useDispatch();

    const[title, setTitle] = useState('');
    const[director, setDirector] = useState('');

   function onInputChange(e) {
		e.target.name === 'title' && setTitle(e.target.value);
		e.target.name === 'director' && setDirector(e.target.value);
	}

    function onFormSubmit(e) {
        e.preventDefault();
        const movie = {
            title,
            director,
            isDone: false}
        api.post('/', movie)
            .then(({ data }) => dispatch(addMovie(data)))
            .catch(({ status }) => console.log(status))
        setTitle('');
        setDirector('')
    }

  return (
    <form onSubmit={onFormSubmit}>
        <input 
        type='text'
        name='title'
        value={title}
        onChange={onInputChange}
        />
       <input 
        type='text'
        name='director'
        value={director}
        onChange={onInputChange}
        />
        <button className='add'>
            Add
        </button>
    </form>
  )
}

export default WatchForm
