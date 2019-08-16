import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycles/billingCycles'

export default props => (
  <Router  >
    <Route path='/' exact component={Dashboard} />
    <Route path='/billingCycles' exact component={BillingCycle} />
    <Redirect from='*' to='/' />
  </Router>
)
