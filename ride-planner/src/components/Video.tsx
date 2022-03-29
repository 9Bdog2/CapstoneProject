import React from "react";
import YouTube from "react-youtube";

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

/* class Video extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event: any) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Video; */
