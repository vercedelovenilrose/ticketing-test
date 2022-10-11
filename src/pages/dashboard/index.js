import React, { useState } from 'react'
import { Breadcrumb, Layout, Menu } from 'antd';
import { Input, Space } from 'antd';
import CustomTable from './table';
import ModalsButton from './modalsButton';
const {  Content } = Layout;
const {Search}=Input
export default function Dashboard() {
    const [deleted,setDeleted] = useState([])
    const onSearch = (value) => console.log(value);
console.log(deleted)
  return (

    <Content
      className="site-layout"
      style={{
        padding: '0 50px',
        marginTop: 64,
      }}
    >
      
      
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
            <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
          <ModalsButton delete={deleted} setDeleted={setDeleted}/>
      <CustomTable delete={deleted} setDeleted={setDeleted}/>
      </div>
    </Content>
  )
}
