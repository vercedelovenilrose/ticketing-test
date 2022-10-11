import React, { useState } from 'react'
import { Button } from 'antd';
import {SettingOutlined, UnorderedListOutlined} from '@ant-design/icons'
import Modals from './modals';

const ModalsButton = (deleted,setDeleted) => {

const [open,setOpen] = useState(false)
  return (

    <div className='' style={ {
    display: 'flex'
    }}>
    <div style={{
    flex: '1',
    marginInlineStart: "70%"
     }}>
    <Button type="primary" onClick={()=> setOpen(true)}>Show Deleted File</Button>
    <Button style={{ marginInlineStart: '2%'}} > <UnorderedListOutlined /></Button>
    <Button type="dashed" style={{ marginInlineStart: '2%'}}><SettingOutlined /></Button>

  </div>
  <Modals open={open} setOpen= {setOpen} deleted ={deleted} setDeleted={setDeleted}/>
  </div>
  )
}

export default ModalsButton