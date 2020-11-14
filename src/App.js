import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          {/* <Route exact path="/products">
            <Products />
          </Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
