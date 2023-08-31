import React from 'react'
import { Layout, Menu, Typography, Button, Space, Image } from 'antd';  
import { HomeOutlined ,FileTextOutlined, AppstoreOutlined , PhoneOutlined} from '@ant-design/icons';
import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;

const menuItems = [
  {
    key: "/",
    icon: React.createElement(HomeOutlined),
    label: "Home",
  },
  {
    key: "/resume",
    icon: React.createElement(FileTextOutlined),
    label: "Resume",
  },
  {
    key: "/projects",
    icon: React.createElement(AppstoreOutlined),
    label: "Projects",
  }
  
];
const layout = () => {
  const navigate = useNavigate();
   
  return (
    <Layout style={{ minHeight: '100vh' }} hasSider>
        <Sider 
          theme="dark" 
          collapsible 
          breakpoint='md'
          width={160}
        >
          <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '12px', marginBottom: '12px' }}>
            <Image preview={false} src="src\Layout\logo.jpg" width={40} height={40} style={{borderRadius:"50%"}}/>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            items={menuItems}
            onClick={(item) => navigate(item.key)}
          />
        </Sider>
        <Layout style={{ minHeight: '100%', backgroundColor: 'white' }}>
          
          
          <Content style={{minHeight: '87vh', backgroundColor: 'white', margin: '24px 16px 0', overflow: 'initial', padding: '2% 5% 2% 5%'}}>
            <Outlet />
          </Content>

          <Footer
            style={{
              minHeight: "3vh",
              textAlign: "center",
            }}>
            Created With 💗 by Himanshu Bedi
          </Footer>
        </Layout>
      </Layout>
  )
}

export default layout