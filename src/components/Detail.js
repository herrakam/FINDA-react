import React from "react";

function Detail() {
  // //url에 전달된 정보로 검색 후 결과들 맞는 테그에 배치함, 페이지 로딩 되면 자동으로 실행
  // const getSearchedInfo = () => {};
  // //리뷰 입력 구현 함수
  // const makeReview = () => {};
  // //비슷한 영화 포스터 가져오는 함수
  // const getSimilarMoviePoster = () => {};
  return (
    <>
      <div className="backgroundPoster"></div>
      <div className="topWrap">
        <div className="poster">포스터 들어갈 자리</div>
        <div className="infoWrap">
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
        </div>
      </div>
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
