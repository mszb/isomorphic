import React, { Component } from 'react';
import { Row, Col } from 'antd';
import basicStyle from '../../config/basicStyle';
import Popover from '../../components/uielements/popover';
import IsoWidgetsWrapper from './widgets-wrapper';
import IsoWidgetBox from './widget-box';
import { TableViews } from '../Tables/antTables';
import { Tabs } from 'antd';
import Button from '../../components/uielements/button';
import PageHeader from '../../components/utility/pageHeader';
import { rtl } from '../../config/withDirection';
import IntlMessages from '../../components/utility/intlMessages';
import PopoverWrapper from '../Uielements/Popover/popover.style';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

const content = (
  <PopoverWrapper>
    <p>
      The most basic example. <br />
      The size of the floating layer depends
      <br /> on the contents region.
    </p>
  </PopoverWrapper>
);


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
    const margin = {
      margin: rtl === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0'
    };


    return (
      <div style={wisgetPageStyle}>


        <Row style={rowStyle} gutter={0} justify="start">

          <Col md={12} sm={12} xs={24}>
            <PageHeader>Invoice and Receipts</PageHeader>
          </Col>

          <Col md={12} sm={12} xs={24} align="right">

            <Popover content={content} title={<IntlMessages id="uiElements.popover.title" />} >
              <Button type="primary" shape="circle" icon="edit" style={margin}/>
            </Popover>

            <Popover content={content} title={<IntlMessages id="uiElements.popover.title" />} >
              <Button type="danger" shape="circle" icon="delete" style={margin}/>
            </Popover>

            <Popover content={content} title={<IntlMessages id="uiElements.popover.title" />} >
              <Button type="primary" shape="circle" icon="link" style={margin}/>
            </Popover>

            <Popover content={content} title={<IntlMessages id="uiElements.popover.title" />} >
              <Button type="primary" shape="circle" icon="download" style={margin}/>
            </Popover>

            <Popover content={content} title={<IntlMessages id="uiElements.popover.title" />} >
              <Button type="primary" shape="circle" icon="plus" style={margin}/>
            </Popover>

            <Popover content={content} title={<IntlMessages id="uiElements.popover.title" />} >
              <Button type="primary" shape="circle" icon="filter" style={margin}/>
            </Popover>

          </Col>

        </Row>

        <Row style={rowStyle} gutter={0} justify="start">

          <Col md={24} sm={24} xs={24} style={colStyle}>

            <IsoWidgetsWrapper>
              <IsoWidgetBox>
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="All" key="1" >
                    <TableViews.allTblView />
                  </TabPane>
                  <TabPane tab="Processed" key="2" >
                    <TableViews.processTblView/>
                  </TabPane>
                  <TabPane tab="Approved" key="3">
                    <TableViews.approvedTblView />
                  </TabPane>
                  <TabPane tab="Reports" key="4">
                    <TableViews.reportsTblView />
                  </TabPane>
                  <TabPane tab="Old Documents" key="5">
                    <TableViews.oldTblView />
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
