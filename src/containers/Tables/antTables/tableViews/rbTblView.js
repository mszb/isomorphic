import React, { Component } from 'react';
import TableWrapper from '../antTable.style';

export default class rbTblView extends Component {
  render() {
    const dataSource = this.props.dataSource || this.props.dataList.getAll();
    const columns = this.props.columns || this.props.tableInfo.columns;
    return (
      <TableWrapper
        pagination={true}
        columns={columns}
        dataSource={dataSource}
        className="isoSimpleTable"
      />
    );
  }
}
