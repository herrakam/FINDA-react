import { call, put, takeEvery } from "redux-saga/effects";
import { getDetailData } from "../api";

// const GET_SEARCHED_DATA = "GET_SEARCHED_DATA";
// const GET_NAME_POSTER = "GET_NAME_POSTER";

const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
const GET_MOVIE_DETAIL_SUCCESS = "GET_MOVIE_DETAIL_SUCCESS";
const GET_MOVIE_DETAIL_ERROR = "GET_MOVIE_DETAIL_ERROR";

// export const getSearchedData = () => ({ type: GET_SEARCHED_DATA });
// export const getNamePoster = (id) => ({ type: GET_NAME_POSTER, payload: id });

export const getMovieDetail = () => ({
  type: GET_MOVIE_DETAIL,
});

export const getMovieDetailSuccess = (data) => ({
  type: GET_MOVIE_DETAIL_SUCCESS,
  payload: data,
});

export const getMovieDetailError = (e) => ({
  type: GET_MOVIE_DETAIL_ERROR,
  payload: e,
});

function* getMovieDetailSaga() {
  try {
    const data = yield call(getDetailData);
    yield put(getMovieDetailSuccess(data));
  } catch (e) {
    yield put(getMovieDetailError(e));
  }
}

export function* getDataSaga() {
  yield takeEvery(GET_MOVIE_DETAIL, getMovieDetailSaga);
}

const initialState = {
  detail: { data: null, loading: false, error: null },
};

export default function Movie(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        detail: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        detail: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case GET_MOVIE_DETAIL_ERROR:
      return {
        ...state,
        detail: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
