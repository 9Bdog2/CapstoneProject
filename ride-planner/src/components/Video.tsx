import React from "react";
import PropTypes from "prop-types";

const Video = () => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/TZE9gVF1QbA`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; controls=0"
      allowFullScreen
      title="Game of Thrones"
    />
  </div>
);

export default Video;
