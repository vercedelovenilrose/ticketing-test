import { Layout, Menu } from 'antd';
import React from 'react';


const { Header } = Layout;
const Headers = () => {
  return (
    <Header
    style={{
      position: 'fixed',
      zIndex: 1,
      width: '100%'
      ,display:"inline-flex"
    }}
  >
    <div className="logo" >
    <label style={{ 
        fontWeight:"bold",
        color: "##b023c7"
    }}> TICKET SENPAI</label>
    </div>

<Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      items={[{label:'Home',key:1},{label:'Tab',key:1},{label:'Tab',key:1}]}
    />
  </Header>
  )
}

export default Headers