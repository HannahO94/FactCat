import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";
import CatListPage from "./pages/CatListPage";
import FactDetailPage from "./pages/FactDetailPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/fact/:id"
          render={(props) => {
            return <FactDetailPage {...props} />;
          }}
        ></Route>
        <Route path="/">
          <CatListPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
