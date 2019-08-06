import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const Wrapper = styled.div`
  display: flex;
  padding: 24px;
  align-items: center;
  .content {
    flex-grow: 1;
    margin-right: 8;
    .name {
      display: block;
      font-size: 18px;
      font-weight: bold;
    }
    .category {
      font-style: italic;
    }
  }
`

const Item = (props) => {
  //something
  return (
    <Wrapper className={props.className}>
      <div className="content">
        <span className="name">{props.name}</span>
        <span className="category">{props.category}</span>
      </div>
      <Button 
        icon="check" 
        shape="circle" 
        type={props.done ? 'primary' : undefined} />
    </Wrapper>
  )
}

export default Item;
