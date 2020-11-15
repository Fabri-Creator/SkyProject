import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import Admin from "./pages/Admin";
import NewProduct from "./pages/NewProduct";
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
          <Route exact path="/admin/login">
            <Admin />
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
