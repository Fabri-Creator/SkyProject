import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import orderReducer from "./reducers/orderReducer";
import priceReducer from "./reducers/priceReducer";
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  order: orderReducer,
  price: priceReducer,
});

export default rootReducer;
