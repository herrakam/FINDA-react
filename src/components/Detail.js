import React from "react";
import styled from "styled-components";
import { genreInfo } from "../api";

const DetailWrap = styled.div`
  /* width: 100%; */
  height: 100%;
  background: #181818;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackgroundPoster = styled.img`
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
const Poster = styled.img`
  height: 400px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0 0 40px 10px;
`;
const InfoWrap = styled.div`
  min-width: 75%;
  align-items: center;
  border: 1px solid black;
  margin: 0 10px 0 0;
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
  display: flex;
  width: 75%;
  height: 100%;
  * {
    margin: 0 4px 0 4px;
  }
`;
const Actor = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(max-content, max-content));
  grid-template-rows: 20px;
  width: 75%;
  height: 100%;
  overflow-x: hidden;
  * {
    padding: 0 3px 0 3px;
  }
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
  margin: 25px 0 0 0;
`;
const MiddleWrap = styled.div`
  width: 90%;
  border: 1px solid black;
  background: darkgreen;
`;
const StoryWrap = styled.div`
  /* width: 100px; */
  color: white;
  font-weight: bolder;
  border: 1px solid black;
  margin: 0 auto;
`;
const Story = styled.div`
  color: white;
  margin: 0 auto;
`;
const SimilarWord = styled.div`
  display: grid;
  place-content: center center;
  font-size: 30px;
  color: white;
  text-align: center;
`;
const SimilarMovieWrap = styled.div`
  width: 90%;
  min-width: 90%;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, 150px);
  place-content: space-around;
`;
const Review = styled.div`
  width: 90%;
  color: white;
  float: left;
  margin: 0 0 30px 0;
`;
const BottomWrap = styled.div`
  width: 90%;
  min-height: 200px;
  /*border: 1px solid white;*/
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CommentWrap = styled.div`
  width: 90%;
  /*height: 100px;*/
  /*border: 1px solid white;*/
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  margin: 0 0 20px 0;
`;
// const InputComment = styled.input`
//   width: 90%;
//   height: 50px;
//   margin: 0 10px 0 0;
//   color: white;
// `;
const CommentPlace = styled.input`
  width: 100%;
  height: 50px;
  background: #202020;
  color: white;
  border: 1px solid #202020;
  font-size: 15px;
  border-radius: 10px;
`;
const CommentBtn = styled.button`
  width: 10%;
  min-width: 45px;
  height: 54px;
  background: #313131;
  line-height: 50%;
  border: none;
  border-radius: 5px;
  font-size: 17px;
  font-weight: bold;
  color: white;
`;
const ReviewBox = styled.div`
  margin: 30px 0 0 0;
  width: 90%;
  border: 1px solid white;
  display: grid;
  place-content: start start;
  grid-auto-columns: 1fr;
  grid-gap: 10px;
`;

//url 토대로 영화 정보 가져오기
// const getSearchedDetail = () => {};
//댓글 생성 함수
// const makeReview = ()=>{}
function Detail({ data }) {
  const credits = data.data.credits;
  const director = credits.find((credit) => credit.role === "DIRECTOR").name;
  const actorArray = credits
    .filter((credit) => credit.role === "ACTOR")
    .slice(0, 9);
  console.log(data);
  const genreArray = genreInfo.filter(
    (genre) =>
      genre.id === data.data.genre_ids[data.data.genre_ids.indexOf(genre.id)]
  );
  const poster = `https://images.justwatch.com/poster/${
    data.data.poster.split("/")[2]
  }/s332/`;
  return (
    <DetailWrap>
      <BackgroundPoster src={poster}></BackgroundPoster>
      <TopWrap>
        <Poster src={poster}></Poster>
        <InfoWrap>
          <TitleWrap>
            <Title>{data.data.title}</Title>
            <Year>{data.data.original_release_year}</Year>
          </TitleWrap>
          <SubjectWrap>
            <SubjectTab>감독 </SubjectTab>
            <Director>{director}</Director>
          </SubjectWrap>
          <SubjectWrap>
            <SubjectTab>장르</SubjectTab>
            <Genre>
              {genreArray.map((genre) => (
                <div>{genre.translation}</div>
              ))}
            </Genre>
          </SubjectWrap>
          <SubjectWrap>
            <SubjectTab>출연진</SubjectTab>
            <Actor>
              {actorArray.map((actor) => (
                <div>{actor.name}</div>
              ))}
            </Actor>
          </SubjectWrap>
          <PlatformInfoWrap>
            <div className="platformTab">이곳에서 찾아볼 수 있어요!</div>
            <div className="platformDetailWrap"></div>
          </PlatformInfoWrap>
        </InfoWrap>
      </TopWrap>
      <MiddleWrap>
        <StoryWrap className="TabStyle">시놉시스</StoryWrap>
        <Story>{data.data.short_description}</Story>
      </MiddleWrap>
      <SimilarWord>이 영화랑 비슷한 영화들</SimilarWord>
      <SimilarMovieWrap></SimilarMovieWrap>
      <Review>한줄평</Review>
      <BottomWrap>
        <CommentWrap>
          <CommentPlace
            type="text"
            placeholder="영화에 대한 의견을 남겨주세요"
          />
          <CommentBtn>등록</CommentBtn>
        </CommentWrap>
        <ReviewBox></ReviewBox>
      </BottomWrap>
    </DetailWrap>
  );
}

export default Detail;
