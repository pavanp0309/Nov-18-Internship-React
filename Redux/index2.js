// importing the Createstore form Redux
import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import {thunk} from 'redux-thunk'

// step3: creating the initial state
let initialState = {
  isloading: false,
  products: [],
  isError: false,
};

// step4: creating the action types for fetching the Data
const FETCH_REQUEST = "fetch_Request";
const FETCH_REQUEST_SUCCESS = "fetch_data";
const FETCH_REQUEST_FAIL = "fetch_data";

// step5:creating the action
function FetchRequest() {
  return {
    type: FETCH_REQUEST,
  };
}

function FetchData(products) {
    console.log(products)
  return {
    type: FETCH_REQUEST_SUCCESS,
    payload: products,
  };
}

function FetchError() {
  return {
    type: FETCH_REQUEST_FAIL,
  };
}

// step6: creating the Reducers
function FetchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isloading: true,
      };
    case FETCH_REQUEST_SUCCESS:
      return {
        ...state,
        isloading: false,
        products: action.payload,
      };
    case FETCH_REQUEST_FAIL:
      return {
        ...state,
        isloading: false,
        isError: true,
      };

    default:
      return state;
  }
}

// step2: creating the store
const store = createStore(FetchReducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

// dispatching the aaction
// logic for Fetching The Products
function fetchProducts() {
  return function (dispatch) {
    dispatch(FetchRequest()); // initialing fetching

    axios.get("https://fakestoreapi.com/products")
      .then(function (response) {
        let Products=response.data
        dispatch(FetchData(Products)) // passing the  products data to the payload
      })
      .catch(function (error) {
        // after fetching the date if any failure it dispatch the fetch error action
        let errName=error.message
       dispatch(FetchError(errName))
      });
  };
}


store.dispatch(fetchProducts())
