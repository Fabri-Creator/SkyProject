import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import firebase from "firebase/app";

import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import NewProduct from "./pages/NewProduct";
import UserSucces from "./pages/UserSucces";

import "./App.scss";
import firebaseConfig from "./Configuracion/config";
import {
  getUserProfileById,
  registerAuthStateChangeHandler,
} from "./logic/user";
import { setUserProfile } from "./redux/actions/userActions";

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
        dispatch(setUserProfile(null));
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
          <Route exact path="/user/login/succes">
            <UserSucces />
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
