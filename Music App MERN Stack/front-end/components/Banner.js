import React from "react";

const Banner = (props) => {

  return (
    
        <div className="container">
      {props.banners.map((banner) => (
        <React.Fragment>
        <div className="row mx-auto col-md-10" key={banner.id}>
          <div className="mt-2">
            <img
              src={banner.imageURL}
              className="card-img-top"
              alt={banner.name}
            />
          </div>
        </div>
        </React.Fragment>
      ))}
    </div>
  );
};


export default Banner;
