import React from "react";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
const TopBody = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const MiddleBody = styled.div`
  width: 100%;
  height: 70vh;
  min-height: 70vh;
  background: blue;
  display: flex;
  /* align-items: center; */
  /*line-height: 40%;*/
  /* flex-direction: column; */
  justify-content: space-around;
`;
const BottomBody = styled.div`
  width: 100%;
  height: 25vh;
  background: yellow;
`;
function Main() {
  // // 검색결과창 띄운 후 안에 검색 결과 가져옴, 검색창 비워지면 검색결과창 가리는 함수 실행,searchbar onkeyup시 실행할 함수,
  // const searchEngine = () => {};
  // //엔터시 url로 검색 결과 전달,searchbar onkeyup시 호출
  // const getSearchDataToUrlWithEnter = () => {};
  // // 검색결과창 가리는 함수
  // const hideSearch = () => {};
  // //searchBtn 클릭시 실행할 함수, url로 검색 결과 보냄
  // const getSearchDataToUrl = () => {};
  // //장르바 보여주는 함수, recommendBarWrap에서 onMouseOver시 호출
  // const getGenreBar = () => {};
  // // recommendBar,Btn,bar,box 일정시간 지나면 크기 조절하는 함수 + 장르 선택 제한 걸어줌(분리필요)
  // const hideRecommend = () => {};
  // //선택장르 정보 url로 넘겨주는 함수(통합 필요)
  // const getRecommendUrl = () => {};

  return (
    <>
      <TopBody>
        <div className="topWord">
          찾는 영화가 어디서 서비스중인지 찾아보세요!
        </div>
        <div className="searchBarWrap">
          <input
            type="text"
            className="searchBar"
            placeholder="찾고싶은 영화 제목을 입력해주세요!"
          />

          <button className="seacrchBtn">
            <MdSearch />
          </button>
          <div className="SearchResult"></div>
        </div>
      </TopBody>
      <MiddleBody>
        <div className="middleLeft">
          <div className="recommendWord">
            장르를 골라 인생영화를 찾아보세요!
          </div>
          <div className="recommendBarWrap">
            <div className="recommendBar"></div>
            <button className="recommendBtn">
              <MdSearch />
            </button>
          </div>
          <div className="recommendBox"></div>
        </div>
        <div className="middleRight">
          <div className="hotMovieWord">핫한 영화</div>
          <div className="hotMovieWrap">
            <div className="hotMovie">영화 정보</div>
          </div>
        </div>
      </MiddleBody>
      <BottomBody>
        <div className="bottomWord">최근 작성된 댓글</div>
        <div className="recentCommentWrap">
          <div className="recentComment">댓글내용</div>
        </div>
      </BottomBody>
    </>
  );
}

export default Main;
