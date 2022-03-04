import React from "react";
import PropTypes from "prop-types";

const Video = () => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/s7L2PVdrb_8?autoplay=1&controls=0&disablekb=1&loop=1&playsinline=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      title="Game of Thrones"
    />
  </div>
);

export default Video;
