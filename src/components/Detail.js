import React from "react";
import styled from "styled-components";

const BackgroundPoster = styled.div`
  width: 100%;
  height: 300px;
`;
const TopWrap = styled.div`
  padding-top: 50px;
  position: relative;
  top: -70px;
  /* background: #181818; */
  /*display: flex;*/
  /*flex-direction: column;*/
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 1fr 2fr;
  width: 90%;
  z-index: 3;
  border-radius: 15px;
  border: 1px solid black;
`;
const Poster = styled.div`
  width: 300px;
  height: 400px;
  /* color: white; */
  border: 1px solid black;
  border-radius: 5px;
  margin: 0 0 40px 10px;
`;
const InfoWrap = styled.div`
  width: 100%;
  min-width: 75%;
  align-items: center;
  border: 1px solid black;
`;
function Detail() {
  return (
    <>
      <BackgroundPoster></BackgroundPoster>
      <TopWrap>
        <Poster>포스터 들어갈 자리</Poster>
        <InfoWrap>
          <div className="titleWrap">
            <div className="title">타이틀</div>
            <div className="year">연도</div>
          </div>
          <div className="directorWrap">
            <div className="director">감독 감독이름</div>
          </div>
          <div className="genresWrap">
            <div className="genres">장르 장르</div>
          </div>
          <div className="actorsWrap">
            <div className="actors">출연진 출연진들</div>
          </div>
          <div className="platformInfoWrap">
            <div className="platformTab">이곳에서 찾아볼 수 있어요!</div>
            <div className="platformDetailWrap"></div>
          </div>
        </InfoWrap>
      </TopWrap>
      <div className="middleWrap">
        <div className="storyWrap">시놉시스</div>
        <div className="story"></div>
      </div>
      <div className="similarWord">이 영화랑 비슷한 영화들</div>
      <div className="similarMovieWrap"></div>
      <div className="review">한줄평</div>
      <div className="bottomWrap">
        <div className="commentWarp">
          <input
            type="text"
            placeholder="영화에 대한 의견을 남겨주세요"
            className="commentInput"
          />
          <button className="commentBtn">등록</button>
        </div>
        <div className="reviewsBox"></div>
      </div>
    </>
  );
}

export default Detail;
