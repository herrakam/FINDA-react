import React from "react";
import styled from "styled-components";

const DetailWrap = styled.div`
  /* width: 100%; */
  height: 100%;
  background: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackgroundPoster = styled.div`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center 25%;
  border: 1px solid black;
  background: blue;
`;
const TopWrap = styled.div`
  width: 80%;
  padding-top: 50px;
  position: relative;
  top: -40px;
  /* background: #181818; */
  background: lightgray;
  display: grid;
  justify-content: space-evenly;
  grid-gap: 20px;
  grid-template-columns: 1fr 2fr;
  width: 90%;
  z-index: 3;
  border-radius: 15px;
  border: 1px solid black;
  * {
    color: white;
    font-weight: bold;
  }
`;
const Poster = styled.div`
  height: 400px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0 0 40px 10px;
`;
const InfoWrap = styled.div`
  min-width: 75%;
  align-items: center;
  border: 1px solid black;
`;
const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  place-content: end start;
  align-items: flex-end;
`;
const Title = styled.div`
  margin: 0 15px 0 0;
  height: 40px;
  font-size: 35px;
`;
const Year = styled.div`
  vertical-align: bottom;
  text-align: left;
  font-size: 23px;
`;
const Director = styled.div`
  width: 75%;
  height: 100%;
`;
const Genre = styled.div`
  width: 75%;
  height: 100%;
`;
const Actor = styled.div`
  width: 75%;
  height: 100%;
`;
const SubjectWrap = styled.div`
  width: 100%;
  display: flex;
  margin: 5px 0 5px 0;
`;
const SubjectTab = styled.div`
  width: 15%;
`;
const PlatformInfoWrap = styled.div`
  width: 100%;
  height: 250px;
  border: 1px sold black;
  background: blue;
`;
function Detail() {
  return (
    <DetailWrap>
      <BackgroundPoster>배경포스터 들어갈 곳</BackgroundPoster>
      <TopWrap>
        <Poster>포스터 들어갈 자리</Poster>
        <InfoWrap>
          <TitleWrap>
            <Title>타이틀</Title>
            <Year>연도</Year>
          </TitleWrap>
          <SubjectWrap>
            <SubjectTab>감독 </SubjectTab>
            <Director>감독이름</Director>
          </SubjectWrap>
          <SubjectWrap>
            <SubjectTab>장르</SubjectTab>
            <Genre>장르 종류</Genre>
          </SubjectWrap>
          <SubjectWrap>
            <SubjectTab>출연진</SubjectTab>
            <Actor>출연진들</Actor>
          </SubjectWrap>
          <PlatformInfoWrap>
            <div className="platformTab">이곳에서 찾아볼 수 있어요!</div>
            <div className="platformDetailWrap"></div>
          </PlatformInfoWrap>
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
    </DetailWrap>
  );
}

export default Detail;
