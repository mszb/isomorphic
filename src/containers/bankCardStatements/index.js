import React, { Component } from 'react';
import { Row, Col } from 'antd';
import basicStyle from '../../config/basicStyle';
import IsoWidgetsWrapper from './widgets-wrapper';
import IsoWidgetBox from './widget-box';
import { TableViews } from '../Tables/antTables';


export default class bankCardStatements extends Component {


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
                <TableViews.rbTblViewDt />
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>
        </Row>


      </div>
    );
  }
}
