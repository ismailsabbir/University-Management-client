import AcademicSemester from "../pages/Admin/AcademicManagement/AcademicSemester";
import AdminDashbord from "../pages/Admin/AdminDashbord";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CretateStudent from "../pages/Admin/CretateStudent";
export const adminpath=[
    {
        name:'dashbord',
        path:'dashbord',
        element:<AdminDashbord></AdminDashbord> 
    },
    {
        name:'Academic Management',
        children:[
            {
                name:'Academic Semester',
                path:'academic-semester',
                element:<AcademicSemester></AcademicSemester>
            },

        ]

    },
    {
        name:'User Management',
        children:[
            {
                name:'create-student',
                path:'create-student',
                element:<CretateStudent></CretateStudent>
            },
            {
                name:'create-admin',
                path:'create-admin',
                element:<CreateAdmin></CreateAdmin>
            },
            {
                name:'create-faculty',
                path:'create-faculty',
                element:<CreateFaculty></CreateFaculty>
            }
        ]
    },
    {
        name:'course Management',
        children:[
            {
                name:'offered course',
                path:'offered-course',
                element:<CretateStudent></CretateStudent>
            },
        ]
    },
];


