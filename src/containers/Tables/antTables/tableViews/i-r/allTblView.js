import React, { Component } from 'react';
import TableWrapper from '../../antTable.style';
import { Button, Icon } from 'antd';

    const columns = [
      {title: 'Document Type', width: '80', dataIndex: 'documentType', render: text => <a href="javascript:;">{text}</a>},
      {title: 'Vendor Name', width: '80', dataIndex: 'vendorName',}, 
      {title: 'Inovice date',width: '80',  dataIndex: 'inoviceDate',},
      {title: 'Amount (Inovice Currency)', width: '80', dataIndex: 'inoviceCurrency', },
      {title: 'Amount (Base Currency)', width: '80', dataIndex: 'baseCurrency', },
      {title: 'Category', width: '80', dataIndex: 'category',},
      {title: 'Payment Method', width: '80', dataIndex: 'paymentMethod'},
      {title: 'icon', dataIndex: 'icon', width: '80',},
      {title: 'button', width: '80', dataIndex: 'button', render: text => <button className="" href="javascript:;">{text}</button>},
      {title: 'icon2', width: '80', dataIndex: 'icon2'}
    ];
    const data = [
      {key: '1', documentType: 'inv', vendorName: 'Google Inc. Google', inoviceDate: '10/02/1981', inoviceCurrency: '199.5 GPB', baseCurrency: '199.5',  category: 'xxxxxxxxx',  paymentMethod: 'xxxxxxxxx', icon: 'icon', button: 'button', icon2: 'icon2', },
      {key: '2', documentType: 'inv', vendorName: 'Google Inc. Google', inoviceDate: '10/02/1981', inoviceCurrency: '199.5 GPB', baseCurrency: '199.5',  category: 'xxxxxxxxx',  paymentMethod: 'xxxxxxxxx', icon: 'icon', button: 'button', icon2: 'icon2', },
      {key: '3', documentType: 'inv', vendorName: 'Google Inc. Google', inoviceDate: '10/02/1981', inoviceCurrency: '199.5 GPB', baseCurrency: '199.5',  category: 'xxxxxxxxx',  paymentMethod: 'xxxxxxxxx', icon: 'icon', button: 'button', icon2: 'icon2', },
      {key: '4', documentType: 'inv', vendorName: 'Google Inc. Google', inoviceDate: '10/02/1981', inoviceCurrency: '199.5 GPB', baseCurrency: '199.5',  category: 'xxxxxxxxx',  paymentMethod: 'xxxxxxxxx', icon: 'icon', button: 'button', icon2: 'icon2', }, 
    ];

    // rowSelection object indicates the need for row selection
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };


export default class allTblView extends Component {
  render() {
    return (
      <TableWrapper rowSelection={rowSelection} columns={columns} dataSource={data} />
    );
  }
}
