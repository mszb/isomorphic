import React, { Component } from 'react';
import clone from 'clone';
import { Row, Col } from 'antd';
import basicStyle from '../../config/basicStyle';
import IsoWidgetsWrapper from './widgets-wrapper';
import IsoWidgetBox from './widget-box';
import { TableViews, tableinfos, dataList } from '../Tables/antTables';


const tableDataList = clone(dataList);
tableDataList.size = 10;

export default class InvoicesReceipts extends Component {

  renderTable(tableInfo) {
    let Component;
    switch (tableInfo.value) {
      case 'sortView':
        Component = TableViews.SortView;
        break;
      case 'filterView':
        Component = TableViews.FilterView;
        break;
      case 'editView':
        Component = TableViews.EditView;
        break;
      case 'groupView':
        Component = TableViews.GroupView;
        break;
      case 'customizedView':
        Component = TableViews.CustomizedView;
        break;
        case 'rbtblView':
        Component = TableViews.rbTblView;
        break;
      default:
        Component = TableViews.SimpleView;
    }
    return <Component tableInfo={tableInfo} dataList={dataList} />;
  }

  componentDidMount(){
    document.title = "Invoices Receipts"
  }

  render() {
    const { rowStyle, colStyle } = basicStyle;
    const wisgetPageStyle = {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'flex-start',
      padding: '15px',
      overflow: 'hidden'
    };

    return (
      <div style={wisgetPageStyle}>
        <Row style={rowStyle} gutter={0} justify="start">

          <Col md={24} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox>
                {/* TABLE */}
                <TableViews.rbTblView
                  tableInfo={tableinfos[3]}
                  dataList={tableDataList}
                />
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>
        </Row>


      </div>
    );
  }
}
