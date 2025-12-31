import React from "react";
import "./NetworkDiagram.css";

import white from "../../assets/icons/white.png";
import blue from "../../assets/icons/blue.png";

export default function NetworkDiagram() {
  return (
    <div className="diagram-wrapper">
      <div className="diagram">
        {/* CONNECTIONS */}
        <svg className="connections" viewBox="0 0 700 510">
          {/* LEFT TOP BLUE */}
          <path d="M220 120 L340 200 L380 200" />
          
          {/* BOTTOM LEFT WHITE */}
          
          <path d="M240 330 L240 300 L370 200" />

          {/* BOTTOM RIGHT WHITE */}
          <path d="M520 300 L480 290 L390 230" />

          <path d="M490 120 L620 220" />

          <path d="M240 330 L360 390 L520 300" />
          <path d="M520 300 L620 220" />
        </svg>

        {/* BLUE BUILDINGS */}
        <img src={blue} className="server blue lt" alt="" />
        <img src={blue} className="server blue rt" alt="" />
        <img src={blue} className="server blue lb" alt="" />
        <img src={blue} className="server blue rb" alt="" />

        {/* WHITE BUILDINGS */}
        <img src={white} className="server white wl" alt="" />
        <img src={white} className="server white wr" alt="" />

        {/* CENTER */}
        {/* CENTER GROUP */}
        <div className="center-group">
          <div className="center-base"></div>
          <img src={white} className="server center" alt="" />
        </div>
      </div>
    </div>
  );
}
