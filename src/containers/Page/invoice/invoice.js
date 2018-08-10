import React from 'react';
import { connect } from 'react-redux';
import invoiceActions from '../../../redux/invoices/actions.js';

import { TableViews } from '../../Tables/antTables';
import Button from '../../../components/uielements/button';
import InvoicePageWrapper from './invoice.style';


const {sendInvoice} = invoiceActions;

const Table = TableViews.SimpleView;

class Invoice extends React.Component {
  state = {
    pagination: false
  };

  render() {

    const {table_data, table_columns, sendInvoice} = this.props;

    return (
      <InvoicePageWrapper className="isoInvoicePageWrapper">
        <div className="isoPageHeader">
          <h1 className="isoPageTitle">Invoice</h1>
          <Button type="primary" icon="printer">
            Print Invoice
          </Button>
        </div>

        <div className="isoPageContent">
          <div className="isoOrderInfo">
            <div className="isoLeftSideContent">
              <h3 className="isoTitle">Invoice Info</h3>
              <span className="isoInvoiceNumber">#1942784</span>
            </div>

            <div className="isoRightSideContent">
              <p>
                Order Status: <span className="orderStatus">Pending</span>
              </p>
              <p>
                Order date: <span className="orderDate">June 23, 2017</span>
              </p>
            </div>
          </div>

          <div className="isoBillingInformation">
            <div className="isoLeftSideContent">
              <h3 className="isoTitle">Bill From</h3>

              <p className="isoNameEmail">
                <span className="isoName">REDQ Inc.</span>
                <span className="isoEmail">redq@company.com</span>
              </p>

              <address>
                405 Mulberry Rd, Mc Grady, <br />
                NC, 28649 <br />
                <br />
                <span className="fax">Fax: </span>+0(863) 228-7064 <br />
                <span className="phone">Phone: </span>+(740) 927-9284
              </address>
            </div>

            <div className="isoRightSideContent">
              <h3 className="isoTitle">Bill To</h3>

              <p className="isoNameEmail">
                <span className="isoName">Pineapple Inc.</span>
                <span className="isoEmail">pineapple@company.com</span>
              </p>

              <address>
                86781 547th Ave, Osmond, <br />
                NE, 68765 <br />
                <br />
                <span className="phone">Phone: </span>+(402) 748-3970
              </address>
            </div>
          </div>

          <div className="isoInvoiceTable">
            <div className="isoSimpleTable">
              <Table {...this.state} columns={table_columns} dataSource={table_data} />
            </div>
            <div className="isoTotalBill">
              <p>
                Sub-total : <span>$13300</span>
              </p>
              <p>
                Vat : <span>$700</span>
              </p>
              <h3>
                Grand Total : <span>$14000</span>
              </h3>
            </div>
          </div>

          <div className="isoButtonWrapper">
            <Button type="primary" onClick={event => sendInvoice()}>Send Invoice</Button>
            <Button icon="printer">Print</Button>
          </div>
        </div>
      </InvoicePageWrapper>
    );
  }
}


function mapStateToProps(state) {
  const { table_columns, table_data } = state.Invoices.toJS();
  return {
    table_columns,
    table_data
  };
}


export default connect(mapStateToProps, {
  sendInvoice
})(Invoice);
