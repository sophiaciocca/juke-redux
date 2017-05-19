import React, { Component } from 'react';

const Lyrics = (props) => {
    
   const artistChange = e => {
       console.log(e.target.value)
    props.setArtist(e.target.value);
  };

  const songChange = e => {
       console.log(e.target.value)
    props.setSong(e.target.value);
  }; 
    
    return (
        <div id="lyrics">
            <form onSubmit={props.handleSubmit}>
        <div>
          <input type="text" value={props.artistQuery} placeholder="Artist" onChange={artistChange}/>
          <input type="text" value={props.songQuery} placeholder="Song" onChange={songChange}/>
        </div>
        <pre>{props.text || 'Search above!'}</pre>
        <button type="submit">Search for Lyrics</button>
      </form>
    </div>
    )
}

export default Lyrics;