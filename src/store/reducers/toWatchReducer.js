import ACTION_TYPES from "../actions/actionTypes";

const  initialState = {
    movies: [
        {
            "title": "Indiana Johns",
            "director": "Stiven Spilberg",
            "id": 1,
            "isDone": true
          },
          {
            "title": "Lord of the rings",
            "director": "Peter Jackson",
            "isDone": true,
            "id": 1655206999251
          },
          {
            "title": "Назад в будущее",
            "director": "Роберт Земекис",
            "isDone": false,
            "id": 1655209153491
          },
    ]
}

 export default function toWatchReducer(state = initialState, {type, payload}){
    switch(type){
        case ACTION_TYPES.ADD_MOVIE: return {
            ...state, movies: [...state.movies, payload]};
        case ACTION_TYPES.DELETE_MOVIE: return {
            ...state, movies: state.movies.filter((movie) => movie.id !== payload )};
        case ACTION_TYPES.TOGGLE_MOVIE: return {
            ...state, movies: state.movies.map((movie) => movie.id === payload ? {...movie, isDone: !movie.isDone} : movie)};
        case ACTION_TYPES.GET_MOVIES: return {
            ...state, movies: [...payload]};
        default: return state;
    }
}