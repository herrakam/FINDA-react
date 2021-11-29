const GET_SEARCHED_DATA = "GET_SEARCHED_DATA";

export const getSearchedData = () => ({ type: GET_SEARCHED_DATA });

const initialState = {};

export default function Movie(state = initialState, action) {
  switch (action.type) {
    case getSearchedData:
  }
}
