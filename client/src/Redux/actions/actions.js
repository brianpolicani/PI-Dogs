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
  SET_PAGE,
} from "../actions/variables";
import axios from "axios";

export function getAllDogs() {
  return async function (dispatch) {
    return await axios
      .get("http://localhost:3001/dogs")
      .then((res) => dispatch({ type: GET_ALL_DOGS, payload: res.data }))
      .catch((error) => error.message);
  };
}

export function getDetails(id) {
  return async function (dispatch) {
    return await axios
      .get(`http://localhost:3001/dogs/${id}`)
      .then((res) => dispatch({ type: GET_DETAILS, payload: res.data }))
      .catch((error) => error.message);
  };
}

export function getName(name) {
  return async function (dispatch) {
    return await axios
      .get(`http://localhost:3001/dogs/?name=${name}`)
      .then((res) => dispatch({ type: GET_NAME, payload: res.data }))
      .catch((error) => error.message);
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    return await axios
      .get(`http://localhost:3001/temperaments`)
      .then((res) => dispatch({ type: GET_TEMPERAMENTS, payload: res.data }))
      .catch((error) => error.message);
  };
}

export function createDog(payload) {
  return async function () {
    return await axios
      .post(`http://localhost:3001/dogs`, payload)
      .then((res) => console.log(res))
      .catch((error) => error.message);
  };
}

export function getOrderByName(payload) {
  return function (dispatch) {
    dispatch({ type: GET_ORDER_BY_NAME, payload });
  };
}

export function getOrderByWeight(payload) {
  return function (dispatch) {
    dispatch({ type: GET_ORDER_BY_WEIGHT, payload });
  };
}

export function filterTemperaments(payload) {
  return function (dispatch) {
    dispatch({ type: FILTER_TEMPERAMENTS, payload });
  };
}

export function cleanDetail() {
  return function (dispatch) {
    dispatch({ type: CLEAN_DETAIL });
  };
}

export function filterCreated(payload) {
  return function (dispatch) {
    dispatch({type: FILTER_CREATED, payload})
  }
}

