import React from "react";
import { Route, Switch } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route
      path="/:enterpriseUuid/onboarding/wizard"
      render={requireAuth(WizardTrans)}
      exact={true}
    />
    <Route
      path="/:enterpriseUuid/onboarding"
      render={requireAuth(Onboarding)}
      exact={true}
    />

    <Route path="/:enterpriseUuid/mandates" render={requireAuth(Mandates)} />

    <Route path="/login" component={LoginTrans} exact={true} />

    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
