import React from "react";
import { Auth } from "../auth";
import { Route, Switch } from "react-router";
import { Products } from "../products";

export const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path={"/sign"} component={Auth} />
        <Route path={"/products"} component={Products} />
      </Switch>
    </div>
  );
};
