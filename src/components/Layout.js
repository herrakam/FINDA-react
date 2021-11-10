import React from "react";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="header">
        <div className="headerleft">
          <div className="logoAndName">
            <div className="logo">로고이미지</div>
            <div className="siteName">FNIDA</div>
          </div>
          <div className="homeBtn">
            <Link>HOME</Link>
            <Link>Movie</Link>
          </div>
        </div>
        <div className="searchBox">
          <input
            type="text"
            className="searchText"
            placeholder="Type to search"
          />
          <div className="Link">클릭시 search</div>
          <div className="div">돋보기이미지</div>
        </div>
      </div>
    </>
  );
}

export default Layout;
