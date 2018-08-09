import React, { Component } from 'react';
import TableWrapper from '../../antTable.style';
import reqwest from 'reqwest';
import { Icon, Button, Popover, Menu, Dropdown, message } from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);


const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
    <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
    <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
  </Menu>
);


function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}


const columns = [
  {title: 'Document Type', dataIndex: 'id', sorter: true, render: id => `${id.name}`, width: '5%'}, 
  {title: 'Vendor Name',dataIndex: 'login', sorter: true, render: login => `${login.username}`, width: '40%'}, 
  {title: 'Invoice date', dataIndex: 'registered', sorter: true, render: registered => `${registered.date}`, width: '20%'},
  {title: 'Inovice Currency', dataIndex: 'location', sorter: true, render: location => `${location.postcode}`, align:'right', width: '5%'},
  {title: 'Base Currency', dataIndex: 'location', sorter: true, render: location => `${location.postcode}`, align:'right', width: '5%'},
  {title: 'Category', dataIndex: '', render: login => <Dropdown.Button onClick={handleButtonClick} overlay={menu}>Dropdown</Dropdown.Button>},
  {title: 'Payment Method', dataIndex: '', render: login => <Dropdown.Button onClick={handleButtonClick} overlay={menu}>Dropdown</Dropdown.Button>},
  {title: '', dataIndex: '', colSpan: 3, render: login => <Popover content={content} title="Title"><a href="javascript:;"><Icon type="message" style={{ fontSize: 18, color: '#08c' }} /></a></Popover>,},
  {title: '', dataIndex: '', colSpan: 0, render: login => <Popover content={content} title="Title"><Button type="primary" shape="circle" icon="search" /></Popover>, },
  {title: '', dataIndex: '', colSpan: 0, render: login => <Popover content={content} title="Title"><a href="javascript:;"><Icon type="file" style={{ fontSize: 18, color: '#08c' }} /></a></Popover>,}
];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };


export default class allTblView extends Component {

  state = {
    data: [],
    pagination: {},
    loading: false,
  };

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }

  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      data: {
        results: 12,
        ...params,
      },
      type: 'json',
    }).then((data) => {
      const pagination = { ...this.state.pagination };
      // Read total count from server
      // pagination.total = data.totalCount;
      // pagination.total = 200;
      this.setState({
        loading: false,
        data: data.results,pagination,
      });
    });
  }

  componentDidMount() {
    this.fetch();

  }

  render() {
    return (

      <TableWrapper
        columns={columns}
        rowKey={record => record.login.uuid}
        dataSource={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
        rowSelection={rowSelection} 
        bordered
      />

    );
  }
}
