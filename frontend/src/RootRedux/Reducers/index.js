import { combineReducers } from "redux";

// Employer Reducers
import * as employerRegistrationReducer from "../../Components/EmployerUI/Components/AuthRegister/Redux/Reducers/reducers";
import * as employerLoginReducer from "../../Components/EmployerUI/Components/AuthLogin/Redux/Reducers/reducers";
import * as createProjectReducer from "../../Components/EmployerUI/Components/MakeProject/Redux/Reducers/reducers";
import * as createInternshipReducer from "../../Components/EmployerUI/Components/MakeInternship/Redux/Reducers/reducers";
import * as employerDataReducer from "../../Components/EmployerUI/Components/EmployerDashboard/Redux/Reducers/reducers";
import * as internRegistrationReduce from "../../Components/InternUI/Components/AuthRegister/Redux/Reducers/reducers";
import * as internLoginReducer from "../../Components/InternUI/Components/AuthLogin/Redux/Reducers/reducers";
<<<<<<< HEAD
import * as retreiveInternshipReducer from "../../Components/InternUI/Components/Internships/Redux/Reducers/reducers";
import * as retreiveProjectsReducer from "../../Components/InternUI/Components/Projects/Redux/Reducers/reducers";
import * as retrieveDashboardReducer from "../../Components/InternUI/Components/InternDashboard/Redux/Reducers/reducers";
=======
import * as retreiveInternshipReducer from '../../Components/InternUI/Components/Internships/Redux/Reducers/reducers'
import * as retreiveProjectsReducer from '../../Components/InternUI/Components/Projects/Redux/Reducers/reducers'
import * as retreiveCoursesReducer from '../../Components/InternUI/Components/Courses/Redux/Reducers/reducers'

>>>>>>> 01c84e379eea9fcf09537c72e94d1229d3f72c61

export const reducer = combineReducers({
  ...employerRegistrationReducer,
  ...employerLoginReducer,
  ...createProjectReducer,
  ...createInternshipReducer,
  ...internRegistrationReduce,
  ...internLoginReducer,
  ...retreiveInternshipReducer,
  ...retreiveProjectsReducer,
<<<<<<< HEAD
  ...retrieveDashboardReducer,
=======
  ...retreiveCoursesReducer,
  ...employerDataReducer,
>>>>>>> 01c84e379eea9fcf09537c72e94d1229d3f72c61
});
