import React, { Component } from 'react';
import TableWrapper from '../../antTable.style';
import reqwest from 'reqwest';

const columns = [
  {title: 'Document Type', dataIndex: 'id', sorter: true, render: id => `${id.name}`, width: '5%',}, 
  {title: 'Vendor Name',dataIndex: 'login', sorter: true, render: login => `${login.username}`, width: '40%',}, 
  {title: 'Invoice date', dataIndex: 'registered', sorter: true, render: registered => `${registered.date}`, width: '20%',},
  { title: 'Inovice Currency', dataIndex: 'location', sorter: true, render: location => `${location.postcode}`, width: '5%',},
  { title: 'Base Currency', dataIndex: 'location', sorter: true, render: location => `${location.postcode}`, width: '5%',},
  { title: 'Category', dataIndex: 'email', sorter: true, width: '20%',},
  { title: 'Payment Method', dataIndex: 'email', sorter: true, width: '20%',},
  { title: 'Email', dataIndex: 'email', sorter: true, width: '20%',}
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
        data: data.results,
        pagination,
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
