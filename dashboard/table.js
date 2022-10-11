import { Table } from 'antd';
import React,{useEffect, useState} from 'react';
import { DeleteOutlined,EditOutlined } from '@ant-design/icons';
import datasource from '../../assets/data/datasource.json'


const CustomTable= (deleted,setDeleted) =>{
    
    const [table,setTable] = useState()
   

    useEffect(()=>{
        setTable(datasource)
    },[])
    const columns = [
        {
          title: 'Ticket Name',
          dataIndex: 'title',
        },
        {
          title: 'Event Organizer',
          dataIndex: 'description',
          sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
          },
        },
        {
          title: 'Venue',
          dataIndex:'venue',
          sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
          },
        },
        {
          title: 'Date',
          dataIndex: 'date',
          sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
          },
        },
        {
          title: 'Avaliability',
          dataIndex: 'availableTicket',
          sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
          },
        },
        {
          title: 'Price',
          dataIndex: 'price',
          sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
          },
        },
        {
          title: 'Action',
          dataIndex: 'english',
         render:(dom,entity)=>{
          return(
              <>
              <EditOutlined style={{ margin:"20%"}} />
              <DeleteOutlined onClick={()=>{
                setTable(table.filter(item => item.id !== entity.id));
    
                setDeleted((prevVals) => [...prevVals,entity])}}/>
              </>
             
          )
         }
        },
      ];
      
      
      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
    return( <Table columns={columns} dataSource={table} onChange={onChange} />)};

export default CustomTable;