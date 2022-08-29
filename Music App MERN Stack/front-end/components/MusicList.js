

import React from "react";

const MusicList = (props) => {

  return (
    
    <div class="container col-10 mt-4 card-group">
    {props.musics.map((music) => (
    <div class="row col-md-2 mx-auto">
      <div class="card">
      <img
        class="card-img h-50"
        src={music.imageURL}
        alt=""
      />
      <div class="card-body text-center">
        <h5 class="card-title">{music.title}</h5>
        <p class="card-text">
        {music.description}
        </p>
      </div>
      <div class="card-footer card-footer1 mx-auto mt-2">
        <img 
        class="card-img w-25 h-75 rounded-circle me-3"
        src={music.profilePicURL}
        alt="test"
        />
        <small class="text-muted">{music.writer}</small>
      </div>
      <div class="card-footer text-light text-muted">
        Views: {music.views}
        <span class="border border-secondary cardgenre"><a href="http://wannart.com" className="musicgenrelink">
          {music.genre}
        </a>
        </span>
      </div>
    </div>
    </div>
    ))}
  </div>
  );
};

export default MusicList;
