import React from "react";
import ReactPlayer from "react-player";

const processjpgs = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <img src="/p2.1/process1.png"></img>
      <ReactPlayer width="100%" url="https://vimeo.com/703541269" loop />
      <img src="/p2.1/process2.png"></img>
      <img src="/p2.1/process3.png"></img>
      <img src="/p2.1/process4.png"></img>
      <img src="/p2.1/process5.png"></img>
      <img src="/p2.1/process6.png"></img>
      <ReactPlayer width="100%" url="https://vimeo.com/703540300" loop />
      <ReactPlayer width="100%" url="https://vimeo.com/703540311" loop />
      <ReactPlayer width="100%" url="https://vimeo.com/703540329" loop />
      <img src="/p2.1/process8.png"></img>
      <ReactPlayer width="100%" url="https://vimeo.com/703541670" loop />
    </div>
  );
};

export default processjpgs;
