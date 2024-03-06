
import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import { useAppDispatch } from '../../redux/hook';
import { logout } from '../../redux/features/auth/authSlice';
const { Header, Content, } = Layout;
const MainLayouts = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
      const dispatch = useAppDispatch()
      const handlelogout=()=>{
        dispatch(logout())
      }
    return (
        <Layout style={{height:'100vh'}}>
          <SideBar></SideBar>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <button onClick={handlelogout}>Log Out</button>
          </Header>
          
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                height:'100vh',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
            <Outlet></Outlet>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
};

export default MainLayouts;