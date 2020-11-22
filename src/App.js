import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import firebase from "firebase/app";

import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import NewProduct from "./pages/NewProduct";

import "./App.scss";
import firebaseConfig from "./Configuracion/config";
import {
  getUserProfileById,
  registerAuthStateChangeHandler,
} from "./logic/user";
import { getProductRealTime, productCollectionObserver } from "./logic/product";
import { setUserProfile, unsetUserProfile } from "./redux/actions/userActions";
import { setProductCollection } from "./redux/actions/productAction";

firebase.initializeApp(firebaseConfig);

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    registerAuthStateChangeHandler(async (user) => {
      if (user) {
        const useProfile = await getUserProfileById(user.uid);
        dispatch(setUserProfile(useProfile));
      } else {
        dispatch(unsetUserProfile());
      }
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    getProductRealTime().then((rs) => {
      dispatch(setProductCollection(rs));
    });
  }, []);

  // useEffect(() => {
  //   productCollectionObserver((updatedCollection) =>
  //     dispatch(setProductCollection(updatedCollection))
  //   );
  // }, []);

  if (loading) return <div>No profile</div>;
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/user/login">
            <UserLogin />
          </Route>
          <Route exact path="/admin/login">
            <AdminLogin />
          </Route>
          <Route exact path="/admin/new-product">
            <NewProduct />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
