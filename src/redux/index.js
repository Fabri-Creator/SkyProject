import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import orderReducer from "./reducers/orderReducer";
import priceReducer from "./reducers/priceReducer";
import adminReducer from "./reducers/adminReducer";
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  order: orderReducer,
  price: priceReducer,
  admin: adminReducer,
});

export default rootReducer;
