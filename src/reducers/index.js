import { combineReducers } from 'redux';


const songsReducer = () => {
  return [
    {title: 'Back In Black', duration: '4:17'},
    { title: 'One Last Ride', duration: '7:47' },
    { title: 'Thunderstruck', duration: '4:05' },
    { title: 'Edge Of Sundown', duration: '4:27' },
  ];
};

const selectedSongReducer= (selectedSong=null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});