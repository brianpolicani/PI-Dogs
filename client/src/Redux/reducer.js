import {
  GET_ALL_DOGS,
  GET_DETAILS,
  GET_NAME,
  GET_TEMPERAMENTS,
  GET_ORDER_BY_NAME,
  GET_ORDER_BY_WEIGHT,
  FILTER_TEMPERAMENTS,
  CLEAN_DETAIL,
  FILTER_CREATED,
} from "./actions/variables";

const initialState = {
  dogs: [],
  temple: [],
  details: {},
  filtered: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_DOGS:
      return { ...state, dogs: action.payload, filtered: action.payload };

    case GET_DETAILS:
      return { ...state, details: action.payload };

    case GET_NAME:
      return { ...state, filtered: action.payload };

    case GET_TEMPERAMENTS:
      return { ...state, temple: action.payload };

    case GET_ORDER_BY_NAME:
      const sortArr =
        action.payload === "asc"
          ? [...state.filtered].sort(function (a, b) {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
          : [...state.filtered].sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (a.name < b.name) {
                return 1;
              }
              return 0;
            });
      return { ...state, filtered: sortArr };

    case GET_ORDER_BY_WEIGHT:
      function weight(arg) {
        let str = arg.toString();
        let arr = str.split(" - ");
        return arr;
      }
      const weightArr =
        action.payload === "wmin"
          ? [...state.filtered].sort(function (a, b) {
              if (
                parseInt(weight(a.weight)[0]) < parseInt(weight(b.weight)[0])
              ) {
                return -1;
              }
              if (
                parseInt(weight(a.weight)[0]) > parseInt(weight(b.weight)[0])
              ) {
                return 1;
              }
              return 0;
            })
          : [...state.filtered].sort(function (a, b) {
              if (
                parseInt(weight(a.weight)[1]) > parseInt(weight(b.weight)[1])
              ) {
                return -1;
              }
              if (
                parseInt(weight(a.weight)[1]) < parseInt(weight(b.weight)[1])
              ) {
                return 1;
              }
              return 0;
            });
      return { ...state, filtered: weightArr };

    case FILTER_TEMPERAMENTS:
      let filterDog = { ...state, filtered: state.dogs };
      let filterDog2 = filterDog.filtered;
      const filterTempDogs =
        action.payload === "All"
          ? state.dogs
          : filterDog2.filter((e) => e.temperament?.includes(action.payload));

      return {
        ...state,
        filtered: filterTempDogs,
        page: true,
      };

    case CLEAN_DETAIL:
      return { ...state, details: {} };

    case FILTER_CREATED:
      let filterApiDb = { ...state, filtered: state.dogs };
      let filterApiDb2 = filterApiDb.filtered;

      if (action.payload === "created") {
        state.filtered = state.dogs;
        let apiDb = filterApiDb2.filter((e) => e.createInDb === true);
        return { ...state, filtered: apiDb, page: true };
      }
      if (action.payload === "api") {
        state.filtered = state.dogs;
        let apiDb = filterApiDb2.filter((e) => !e.createInDb);
        return { ...state, filtered: apiDb, page: true };
      } else {
        state.filtered = state.dogs;
        let apiDb = filterApiDb2;
        return { ...state, filtered: apiDb };
      }

    default:
      return state;
  }
}
