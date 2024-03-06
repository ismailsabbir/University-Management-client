import { Layout, Menu} from 'antd';
import { sidebarItemsGenarators } from '../../utils/sidebarItemsGenarators';
import { adminpath } from '../../routes/admin.routes';
import { facultyPath } from './../../routes/faculty.routes';
import { studentPath } from '../../routes/student.routes';
import { useAppSelector } from '../../redux/hook';
const { Sider } = Layout;
const UserRole={
    'ADMIN':'admin',
    'FACULTY':'faculty',
    'STUDENT':'student'
}
const SideBar = () => {
  const user = useAppSelector((state) => state.auth.user)
  console.log(user);  
  const role=user?.role;
    var sidebarItems;
    switch (role) {
        case UserRole.ADMIN:
            sidebarItems=sidebarItemsGenarators(adminpath,UserRole.ADMIN)
            break;
            case UserRole.FACULTY:
            sidebarItems=sidebarItemsGenarators(facultyPath,UserRole.FACULTY)
            break;
            case UserRole.STUDENT:
                sidebarItems=sidebarItemsGenarators(studentPath,UserRole.STUDENT)
                break;
        default:
            break;
    }
    return (
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <div style={{display:'flex',alignItems:'center',justifyContent:'center', color:'white',height:'40px'}}>
            <h1>PH Uni</h1>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />

        </Sider>
    );
};

export default SideBar;