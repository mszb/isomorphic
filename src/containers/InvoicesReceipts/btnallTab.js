import React, { Component } from 'react';
import { Col } from 'antd';
import Popover from '../../components/uielements/popover';
import IntlMessages from '../../components/utility/intlMessages';
import Button from '../../components/uielements/button';
import PopoverWrapper from '../Uielements/Popover/popover.style';
import { rtl } from '../../config/withDirection';

const content = (
  <PopoverWrapper>
    <p>
      The most basic example. <br />
      The size of the floating layer depends
      <br /> on the contents region.
    </p>
  </PopoverWrapper>
);

export default class BtnallTab extends Component {
  render() {
    const margin = {
      margin: rtl === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0'
    };

    return (
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
    );
  }
}
