import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import handMadeReducer from "./handMadeReducer";
import clientReducer from "./clientReducer";
import adminReducer from "./adminReducer";
import chatReducer from "./chatReducer";
const rootReducer = combineReducers({
  LoginReducer,
  handMadeReducer,
  clientReducer,
  adminReducer,
  chatReducer,
});

export default rootReducer;
