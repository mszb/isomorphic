import React, { Component } from 'react';
import TableWrapper from '../../antTable.style';

    const columns = [
      {title: 'Document Type', dataIndex: 'documentType', render: text => <a href="javascript:;">{text}</a>,},
      {title: 'Vendor Name', dataIndex: 'vendorName',}, 
      {title: 'Inovice date', dataIndex: 'inoviceDate',},
      {title: 'Amount (Inovice Currency)', dataIndex: 'inoviceCurrency', width: '10%',},
      {title: 'Amount (Base Currency)', dataIndex: 'baseCurrency', width: '10%',},
      {title: 'Category', dataIndex: 'category',},
      {title: 'Payment Method', dataIndex: 'paymentMethod',}
    ];
    const data = [
      {key: '1', documentType: 'inv', vendorName: 'Google Inc. Google', inoviceDate: '10/02/1981', inoviceCurrency: '199.5 GPB', baseCurrency: '199.5',  category: 'xxxxxxxxx',  paymentMethod: 'xxxxxxxxx', },
      {key: '2', documentType: 'inv', vendorName: 'Google Inc. Google', inoviceDate: '10/02/1981', inoviceCurrency: '199.5 GPB', baseCurrency: '199.5',  category: 'xxxxxxxxx',  paymentMethod: 'xxxxxxxxx', },
      {key: '3', documentType: 'inv', vendorName: 'Google Inc. Google', inoviceDate: '10/02/1981', inoviceCurrency: '199.5 GPB', baseCurrency: '199.5',  category: 'xxxxxxxxx',  paymentMethod: 'xxxxxxxxx', },
      {key: '4', documentType: 'inv', vendorName: 'Google Inc. Google', inoviceDate: '10/02/1981', inoviceCurrency: '199.5 GPB', baseCurrency: '199.5',  category: 'xxxxxxxxx',  paymentMethod: 'xxxxxxxxx', }, 
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
