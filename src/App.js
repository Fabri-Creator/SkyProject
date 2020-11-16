import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import NewProduct from "./pages/NewProduct";
import UserSucces from "./pages/UserSucces";
import firebase from "firebase/app";

import firebaseConfig from "./Configuracion/config";
firebase.initializeApp(firebaseConfig);

function App() {
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
