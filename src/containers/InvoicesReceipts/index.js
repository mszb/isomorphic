import React, { Component } from 'react';
import { Row, Col } from 'antd';
import basicStyle from '../../config/basicStyle';
import IsoWidgetsWrapper from './widgets-wrapper';
import IsoWidgetBox from './widget-box';
import { TableViews } from '../Tables/antTables';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}


export default class InvoicesReceipts extends Component {



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

                <Tabs defaultActiveKey="1" onChange={callback}>

                  <TabPane tab="All" key="1">
                    <TableViews.allTblView />
                  </TabPane>
                  <TabPane tab="Processed" key="2">
                    <TableViews.rbTblView />
                  </TabPane>
                  <TabPane tab="Approved" key="3">
                    <TableViews.rbTblView />
                  </TabPane>
                  <TabPane tab="Reports" key="4">
                    <TableViews.rbTblView />
                  </TabPane>
                  <TabPane tab="Old Documents" key="5">
                    <TableViews.rbTblView />
                  </TabPane>
                </Tabs>

              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>
        </Row>


      </div>
    );
  }
}
