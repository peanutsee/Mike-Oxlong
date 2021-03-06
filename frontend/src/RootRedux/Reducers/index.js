import { combineReducers } from "redux";

// Employer Reducers
import * as employerRegistrationReducer from "../../Components/EmployerUI/Components/AuthRegister/Redux/Reducers/reducers";
import * as employerLoginReducer from "../../Components/EmployerUI/Components/AuthLogin/Redux/Reducers/reducers";
import * as createProjectReducer from "../../Components/EmployerUI/Components/MakeProject/Redux/Reducers/reducers";
import * as createInternshipReducer from "../../Components/EmployerUI/Components/MakeInternship/Redux/Reducers/reducers";
import * as employerDataReducer from "../../Components/EmployerUI/Components/EmployerDashboard/Redux/Reducers/reducers";
import * as internRegistrationReduce from "../../Components/InternUI/Components/AuthRegister/Redux/Reducers/reducers";
import * as internLoginReducer from "../../Components/InternUI/Components/AuthLogin/Redux/Reducers/reducers";
import * as retreiveInternshipReducer from "../../Components/InternUI/Components/Internships/Redux/Reducers/reducers";
import * as retreiveProjectsReducer from "../../Components/InternUI/Components/Projects/Redux/Reducers/reducers";
import * as retreiveCoursesReducer from "../../Components/InternUI/Components/Courses/Redux/Reducers/reducers";
import * as retrieveDashboardReducer from '../../Components/InternUI/Components/InternDashboard/Redux/Reducers/reducers'

export const reducer = combineReducers({
  ...employerRegistrationReducer,
  ...employerLoginReducer,
  ...createProjectReducer,
  ...createInternshipReducer,
  ...internRegistrationReduce,
  ...internLoginReducer,
  ...retreiveInternshipReducer,
  ...retreiveProjectsReducer,
  ...retreiveCoursesReducer,
  ...employerDataReducer,
  ...retrieveDashboardReducer,
});
