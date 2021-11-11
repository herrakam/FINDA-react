import React from "react";
import { Link } from "react-router-dom";

function Header() {
  // //헤더의 검색창 기능 구현에 들어가는 기능. 리펙토링으로 합칠 수 있을듯
  // const headerSearchEngine = () => {};
  // //엔터키 입력시 검색 실행해주는 함수. 리펙토링 필요
  // const headerSearchKeyboard = () => {};
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

export default Header;
