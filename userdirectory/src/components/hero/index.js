import React from "react";
import Search from "../search";

function Hero() {
    return(
        <div className="hero">
        <div className="hero-body u-flex u-flex-column u-items-center">
          <div className="content">
            <h2 className="title ">Employee Directory</h2>
            <h5 className="subtitle text-gray-300">And I am the subtitle.</h5></div>
            <Search />
          </div>
      </div>
    )
}

export default Hero;