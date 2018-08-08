import React, { Component } from 'react';
import { Row, Col } from 'antd';
import basicStyle from '../../config/basicStyle';
import IsoWidgetsWrapper from './widgets-wrapper';
import IsoWidgetBox from './widget-box';
import { TableViews } from '../Tables/antTables';
import { Tabs } from 'antd';
import PageHeader from '../../components/utility/pageHeader';
import BtnallTab from './btnallTab';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

export default class InvoicesReceipts extends Component {

  constructor(){
    super();
    this.state = {
      name: 'jhon'
    }
    console.log('constructor');
  } 

  componentWillMount(){
    if( window.innerWidth < 500 ){
      this.setState({innerWidth:window.innerWidth});
    }
    console.log('componentWillMount');
  }

  componentDidMount(){
    document.title = "Invoices Receipts"
    console.log('componentDidMount');
  }

  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(){
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState){
    console.log('prevProps', prevProps);
    console.log('prevProps', prevState);
    console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  changeState(){
    this.setState({name: 'jill'});
  }

  unmountChild(){
    this.setState({name:'robert'});
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
    console.log('render');
    if(this.setState.name === 'robert'){
      return(<div/>)
    }
    return (
      <div style={wisgetPageStyle}>

        <Row style={rowStyle} gutter={0} justify="start">


          <Col md={12} sm={12} xs={24}>
            <PageHeader>Invoice and Receipts</PageHeader>
          </Col>
          <BtnallTab />
        </Row>

        <Row style={rowStyle} gutter={0} justify="start">

          <Col md={24} sm={24} xs={24} style={colStyle}>

            <IsoWidgetsWrapper>
              <IsoWidgetBox>
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="All" key="1" >
                    <TableViews.allTblView />
                  </TabPane>
                  <TabPane tab="Processed" key="2">
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
