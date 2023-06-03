import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div>
      <div className="container gallery-container ">
        <h1 className="fontsz line"> Gallery</h1>

        <p className="page-description text-center">
          A Photography by Sahil b.Sawant.
        </p>

        <div className="tz-gallery">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <a className="lightbox" href="/gallery/grass.jpg">
                <img src="/gallery/grass.jpg" alt="grass" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a className="lightbox" href="../gallery/rain.jpg">
                <img src="/gallery/rain.jpg" alt="rain" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a className="lightbox" href="/gallery/mango.jpg">
                <img src="/gallery/mango.jpg" alt="mango" />
              </a>
            </div>
            <div className="col-sm-12 col-md-8">
              <a className="lightbox" href="/gallery/pagoda.jpg">
                <img src="/gallery/pagoda.jpg" alt="Traffic" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a className="lightbox" href="/gallery/hill.jpg">
                <img src="/gallery/hill.jpg" alt="hill" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a className="lightbox" href="/gallery/drop.jpg">
                <img src="/gallery/drop.jpg" alt="Rails" />
              </a>
            </div>
          </div>
        </div>
        {/* <button className="btn btn-primary float-end p-4">View More</button> */}
      </div>
    </div>
  );
};

export default Gallery;
