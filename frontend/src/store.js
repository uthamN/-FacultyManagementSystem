import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { userLoginReducer } from "./reducers/userReducers";

// const reducer = combineReducers({
//   noteList: noteListReducer,
//   userLogin: userLoginReducer,
//   userRegister: userRegisterReducer,
//   noteCreate: noteCreateReducer,
//   noteDelete: noteDeleteReducer,
//   noteUpdate: noteUpdateReducer,
//   userUpdate: userUpdateReducer,
// });

// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

const reducer = combineReducers({
    userLoginReducer,
});

const initialState = {
//   userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// export const store;