import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import Item from 'antd/lib/list/Item';
import React, { useState } from 'react';

const LocalizedModal = ({open, setOpen,deleted,setDeleted}) => {


  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      
      <Modal
        title="Modal"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText=""
        cancelText="Close"
      >
       
       
      </Modal>
    </>
  );
};

const confirm = () => {
  Modal.confirm({
    title: 'Confirm',
    icon: <ExclamationCircleOutlined />,
    content: "blaah" ,
    okText: 'OK',
    cancelText: 'Cancel',
  });
};

const Modals = () => (
  <Space>
    <LocalizedModal />
    <Button onClick={confirm}>Confirm</Button>
  </Space>
);

export default LocalizedModal;