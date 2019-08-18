import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCyclesReducer from '../billingCycles/billingCyclesReducer'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCyclesReducer,
  form: formReducer,
  toastr: toastrReducer
})

export default rootReducer
