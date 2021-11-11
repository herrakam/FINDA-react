import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  // //헤더의 검색창 기능 구현에 들어가는 기능. 리펙토링으로 합칠 수 있을듯
  // const headerSearchEngine = () => {};
  // //엔터키 입력시 검색 실행해주는 함수. 리펙토링 필요
  // const headerSearchKeyboard = () => {};
  const Header = styled.div`
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    transition: 0.5s;
  `;
  const HeaderLeft = styled.div`
    font-family: "Nunito Sans", sans-serif;
    display: flex;
    width: 400px;
    align-items: center;
    > * {
      color: white;
    }
  `;
  const HomeBtn = styled.div`
    margin: 0 0 0 30px;
    display: flex;
    width: 30%;
    justify-content: space-between;
  `;
  const LogoAndName = styled.div`
    display: flex;
    align-items: center;
  `;
  return (
    <>
      <Header>
        <HeaderLeft>
          <LogoAndName>
            {/* <i className="fas fa-film fa-2x"></i> */}
            <div className="siteName">FINDA</div>
          </LogoAndName>
          <HomeBtn>
            <Link>HOME</Link>
            <Link>Movie</Link>
          </HomeBtn>
        </HeaderLeft>
        <div className="searchBox">
          <input
            type="text"
            className="searchText"
            placeholder="Type to search"
          />
          <div className="Link">클릭시 search</div>
          <div className="div">돋보기이미지</div>
        </div>
      </Header>
    </>
  );
}

export default Header;
