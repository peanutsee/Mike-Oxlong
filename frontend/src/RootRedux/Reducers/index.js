import { combineReducers } from "redux";

// Employer Reducers
import * as employerRegistrationReducer from "../../Components/EmployerUI/Components/AuthRegister/Redux/Reducers/reducers";
import * as employerLoginReducer from "../../Components/EmployerUI/Components/AuthLogin/Redux/Reducers/reducers";
import * as createProjectReducer from "../../Components/EmployerUI/Components/MakeProject/Redux/Reducers/reducers";
import * as createInternshipReducer from "../../Components/EmployerUI/Components/MakeInternship/Redux/Reducers/reducers";
import * as internRegistrationReduce from "../../Components/InternUI/Components/AuthRegister/Redux/Reducers/reducers";
import * as internLoginReducer from "../../Components/InternUI/Components/AuthLogin/Redux/Reducers/reducers";

export const reducer = combineReducers({
  ...employerRegistrationReducer,
  ...employerLoginReducer,
  ...createProjectReducer,
  ...createInternshipReducer,
  ...internRegistrationReduce,
  ...internLoginReducer,
});
