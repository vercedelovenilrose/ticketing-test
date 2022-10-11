import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import Headers from './components/header';
import Dashboard from './pages/dashboard';
import modalsButton from './pages/dashboard/modalsButton';


const { Footer } = Layout;


const App = () => (
  <Layout>
    <Headers/>
    <modalsButton/>
    <Dashboard/>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default App;