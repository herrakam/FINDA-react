import React, { useEffect } from "react";
import Detail from "../components/Detail";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetail } from "../modules/Movie";
function DetailContainer() {
  const { data, loading, error } = useSelector((state) => state.movie.detail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetail());
  }, [dispatch]);

  if (loading && !data) {
    return <div>로딩중...</div>;
  }
  if (error) {
    return <div>에러 발생</div>;
  }
  if (!data) {
    return null;
  }
  return (
    <>
      <Detail data={data}></Detail>
    </>
  );
}

export default DetailContainer;
