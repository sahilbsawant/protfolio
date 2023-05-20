import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div>
      <div className="container gallery-container ">
        <h1 className="fontsz line"> Gallery</h1>

        <p className="page-description text-center">
          A Photography by sahil b sawant.
        </p>

        <div className="tz-gallery">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <a className="lightbox" href="/gallery/bridge.jpg">
                <img src="/gallery/bridge.jpg" alt="Bridge" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a className="lightbox" href="../gallery/park.jpg">
                <img src="/gallery/park.jpg" alt="Park" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a className="lightbox" href="/gallery/tunnel.jpg">
                <img src="/gallery/tunnel.jpg" alt="Tunnel" />
              </a>
            </div>
            <div className="col-sm-12 col-md-8">
              <a className="lightbox" href="/gallery/traffic.jpg">
                <img src="/gallery/traffic.jpg" alt="Traffic" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a className="lightbox" href="/gallery/coast.jpg">
                <img src="/gallery/coast.jpg" alt="Coast" />
              </a>
            </div>
            <div className="col-sm-6 col-md-4">
              <a className="lightbox" href="/gallery/rails.jpg">
                <img src="/gallery/rails.jpg" alt="Rails" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
