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

  constructor(){
    super();
    console.log('child constructor');
  } 

  componentWillMount(){
    console.log('child componentWillMount');
  }

  componentDidMount(){
    console.log('child componentDidMount');
  }

  componentWillReceiveProps(){
    console.log('child componentWillReceiveProps');
  }
  
  shouldComponentUpdate(nextProps, nextState){
    console.log('child shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(){
    console.log('child componentWillUpdate');
  }

  componentDidUpdate(){
    console.log('child componentDidUpdate');
  }

  componentDidUpdate(prevProps, prevState){
    console.log('child prevProps', prevProps);
    console.log('child prevProps', prevState);
    console.log('child componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('child componentWillUnmount');
  }


  render() {
    const margin = {
      margin: rtl === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0'
    };

    console.log('child render');
    return (
      <Col md={12} sm={12} xs={24} align="right">

      <Popover content={content} title={<IntlMessages id="uiElements.popover.title" />} >
        <Button type="primary" shape="circle" icon="edit" style={margin}></Button>
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
