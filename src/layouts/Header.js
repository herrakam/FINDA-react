import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineMovieCreation, MdSearch } from "react-icons/md";

const HeaderWrap = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  transition: 1s;
  height: 50px;
  :hover {
    background: #181818;
  }
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
  * {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
`;
const LogoAndName = styled.div`
  display: flex;
  align-items: center;
  .MdOutlineMovieCreation {
    color: white;
    padding: 0 0 0 10px;
  }
`;
const SiteName = styled.div`
  line-height: 45%;
  font-size: 30px;
  color: white;
  text-decoration: none;
  font-weight: bold;
`;
const SearchBox = styled.div`
  padding: 10px;
  top: 50%;
  left: 50%;
  height: 20px;
  background-color: #fff;
  border: 1px solid white;
  border-radius: 30px;
  transition: 0.4s;
  width: 20px;
  animation-direction: reverse;
  margin: 0 50px 0 0;
  :hover {
    box-shadow: 0px 0px 0.5px 1px #51e3d4;
    width: 180px;
    animation-direction: reverse;
    .SearchText {
      width: 120px;
      padding: 0 6px;
    }
  }
  .searchBtn {
    text-decoration: none;
    float: right;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #51e3d4;
  }
`;
const SearchText = styled.input`
  display: flex;
  padding: 0;
  width: 0px;
  border: none;
  background: none;
  outline: none;
  float: left;
  font-size: 1rem;
  line-height: 20px;
  transition: 0.4s;
`;
const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const comeHeader = useRef(0);

  // ????????? ????????? ???????????? ?????? ????????????
  const showHeader = () => {
    let currentUrl = window.location.href;
    const mainUrl = "http://localhost:3000/";
    if (currentUrl === mainUrl) {
      setScrollY(window.scrollY);
      if (scrollY < 100) {
        comeHeader.current.style.display = "none";
      } else {
        comeHeader.current.style.display = "flex";
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", showHeader);
    return () => {
      window.removeEventListener("scroll", showHeader);
    };
  }, [showHeader]);

  // //????????? ????????? ?????? ????????? ???????????? ??????. ?????????????????? ?????? ??? ?????????
  // const headerSearchEngine = () => {};
  // //????????? ????????? ?????? ??????????????? ??????. ???????????? ??????
  // const headerSearchKeyboard = () => {};

  return (
    <>
      <HeaderWrap ref={comeHeader}>
        <HeaderLeft>
          <LogoAndName>
            <MdOutlineMovieCreation className="movieIcon" size="30" />
            <SiteName>FINDA</SiteName>
          </LogoAndName>
          <HomeBtn>
            <Link to="/">HOME</Link>
            <Link to="search">Movie</Link>
          </HomeBtn>
        </HeaderLeft>
        <SearchBox>
          <SearchText
            type="text"
            placeholder="Type to search"
            className="SearchText"
          />
          <Link to="#" className="searchBtn">
            <MdSearch size="25"></MdSearch>
          </Link>
          {/* ????????? ???????????? ?????? ???????????????! */}
        </SearchBox>
      </HeaderWrap>
    </>
  );
};

export default Header;
