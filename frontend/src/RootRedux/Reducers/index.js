import { combineReducers } from "redux";

// Employer Reducers
import * as employerRegistrationReducer from '../../Components/EmployerUI/Components/AuthRegister/Redux/Reducers/reducers'
import * as employerLoginReducer from '../../Components/EmployerUI/Components/AuthLogin/Redux/Reducers/reducers'


export const reducer = combineReducers({
    ...employerRegistrationReducer,
    ...employerLoginReducer
});
