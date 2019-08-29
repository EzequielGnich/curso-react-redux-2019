import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import { IndexRoute } from "react-router";

import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycles/billingCycles";

export default props => (
  <Router>
    <Route path="/" exact component={BillingCycle} />
    <Route path="/billingCycles" exact component={Dashboard} />
    <Redirect from="*" to="/" />
  </Router>
);
