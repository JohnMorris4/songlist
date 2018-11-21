import React from 'react';


import SongDetail from './SongDetail'
import SongList from './SongList'

// example of namedImports  import {selectSong} from './actions'
// default imports NO {}

const App = ()  =>  {
  return (
  <div className="ui container grid">
    <div className="ui row">
        <div className="eight wide column">
        <SongList />
      </div>
        <div className="eight wide column">
        <SongDetail />
      </div>
    </div>
  </div>
  );
};

export default App;