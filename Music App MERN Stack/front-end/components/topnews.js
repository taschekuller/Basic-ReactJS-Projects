

import React from "react";

const topnews = (props) => {

  return (
    
    <div className="container col-10 mt-2 card-group">
    {props.topnews.map((topnew) => (
    <div className="row col-md-2 mx-auto ">
      <div className="card">
      <img
        className="card-img topnews-img"
        src={topnew.imageURL}
        alt="test"
      />
      <div className="card-img-overlay p-5 text-center ">
      <div className="card-body text-center">
        <h5 className="card-title">{topnew.name}</h5>
        <p className="card-text">
        {topnew.description}
        </p>
      </div>
      <div className="card-footer card-footer1 ">
        <small className="text-light ">Writer: {topnew.writer}</small>
      </div>
      </div>
      
    </div>
    </div>
    ))}
  </div>
  );
};

export default topnews;


