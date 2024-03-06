import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminpath} from "./admin.routes";
import { routesGenerator } from "../utils/routesGenerator";
import { facultyPath } from "./faculty.routes";
import { studentPath } from "./student.routes";
import Login from "../pages/Login/Login";
const routes=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
    },
    {
        path:'/admin',
        element:<App></App>,
        children:routesGenerator(adminpath)
    },
    {
        path:'/faculty',
        element:<App></App>,
        children:routesGenerator(facultyPath)
    },
    {
        path:'/student',
        element:<App></App>,
        children:routesGenerator(studentPath)
    },
    {
        path: '/login',
        element: <Login></Login>
      },
])

export default routes;