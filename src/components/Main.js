import React from "react";

function Main() {
  // 검색결과창 띄운 후 안에 검색 결과 가져옴, 검색창 비워지면 검색결과창 가리는 함수 실행,searchbar onkeyup시 실행할 함수,
  const searchEngine = () => {};
  //엔터시 url로 검색 결과 전달,searchbar onkeyup시 호출
  const getSearchDataToUrlWithEnter = () => {};
  // 검색결과창 가리는 함수
  const hideSearch = () => {};
  //searchBtn 클릭시 실행할 함수, url로 검색 결과 보냄
  const getSearchDataToUrl = () => {};
  //장르바 보여주는 함수, recommendBarWrap에서 onMouseOver시 호출
  const getGenreBar = () => {};
  // recommendBar,Btn,bar,box 일정시간 지나면 크기 조절하는 함수 + 장르 선택 제한 걸어줌(분리필요)
  const hideRecommend = () => {};
  //선택장르 정보 url로 넘겨주는 함수(통합 필요)
  const getRecommendUrl = () => {};

  return (
    <>
      <div className="topBody">
        <div className="topWord">
          찾는 영화가 어디서 서비스중인지 찾아보세요!
        </div>
        <div className="searchBarWrap">
          <input
            type="text"
            className="searchBar"
            placeholder="찾고싶은 영화 제목을 입력해주세요!"
          />
        </div>
        <button className="seacrchBtn">SEARCH</button>
      </div>
      <div className="bottomBody">
        <div className="bottomWord">장르를 골라 인생영화를 찾아보세요!</div>
        <div className="recommendBarWrap">
          <div className="recommendBar"></div>
          <button className="recommendBtn">search</button>
        </div>
        <div className="recommendBox"></div>
      </div>
    </>
  );
}

export default Main;
