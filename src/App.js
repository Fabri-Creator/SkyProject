import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase/app";

import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import NewOrder from "./pages/NewOrder";
import InfoPurchase from "./pages/InfoPurchase";

import "./App.scss";
import firebaseConfig from "./Configuration/config";
import {
  getUserProfileById,
  registerAuthStateChangeHandler,
} from "./logic/user";

import { setUserProfile, unsetUserProfile } from "./redux/actions/userActions";

firebase.initializeApp(firebaseConfig);

function App() {
  const state = useSelector((state) => state);
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
          <Route exact path="/order">
            <NewOrder />
          </Route>
          <Route exact path="/order/purchase">
            <InfoPurchase />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
