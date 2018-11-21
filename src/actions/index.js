// ACTION CREATORS

export const selectSong  = (song) => {
  // Returns an action
  
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

