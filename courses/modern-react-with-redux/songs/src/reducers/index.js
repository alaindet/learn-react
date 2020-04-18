import { combineReducers } from 'redux';

export const songsReducer = () => {
  return [
    { title: 'Never Gonna Give You Up', year: 1987 },
    { title: 'Together Forever', year: 1987 },
    { title: 'She Wants to Dance with Me', year: 1988 },
    { title: 'Whenever You Need Somebody', year: 1987 },
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SELECT_SONG') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
