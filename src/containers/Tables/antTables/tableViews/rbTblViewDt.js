import React, { Component } from 'react';
import TableWrapper from '../antTable.style';
import reqwest from 'reqwest';

const columns = [
    {title: 'Name', dataIndex: 'name', sorter: true, render: name => `${name.first} ${name.last}`, width: '20%',}, 
    {title: 'Gender',dataIndex: 'gender',
      filters: [ { text: 'Male', value: 'male' }, { text: 'Female', value: 'female' },], width: '20%',}, 
    {title: 'Location', dataIndex: 'location', sorter: true, render: location => `${location.city}`, width: '20%',},
    { title: 'Email', dataIndex: 'email', sorter: true,}
  ];


export default class rbTblViewDt extends Component {
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
        results: 5,
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
      />
    );
  }
}
