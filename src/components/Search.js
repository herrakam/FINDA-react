import React from "react";

function Search() {
  //검색 결과에 따라 윗 문구 선정
  const selectTopWord = () => {};
  //무한스크롤. 스크롤 위치 포착해서 페이지 추가 함수 실행해줌
  const getPageBeginner = () => {};
  //무한스크롤. 페이지 추가 후 검색or 추천 데이터 가져오는 함수 실행
  const getPage = () => {};
  // 검색결과 데이터 가져오는 함수
  const getSearchedData = () => {};
  //추천 결과 데이터 가져오는 함수
  const getRecommendData = () => {};
  //검색결과가 없을때 나오는 함수
  const checkEmpty = () => {};
  return (
    <>
      <div className="searchTopWrap">
        <div className="sarchTopWord">
          FINDA의 영화목록 OR 검색결과 or 장르 검색 결과
        </div>
      </div>
      <div className="sorryWrap"></div>
      <div className="mainWrap"></div>
    </>
  );
}

export default Search;
