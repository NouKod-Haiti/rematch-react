import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
import Item from '../components/Item'

const Wrapper = styled.div`
  .list {
    margin-bottom: 24px;
    .item:nth-child(2n + 1) {
      background: #fafafa;
    }
  }
  .divider {
    background: #eee;
    height: 1px;
    border: 0;
    margin: 24px 0;
  }
  .new { 
    display: flex;
    .input {
      margin-right: 16px;
    }
  }
`

const List = (props) => {
  // Somthing
  return (
    <Wrapper>
      <div className="list">
        {
          props.todos.map(todo => (
            <Item
              className="item" 
              name={todo.name}
              category={todo.category}
              done={todo.done}
            />
          ))
        }
      </div>
      <hr className="divider" />
      <div class="new">
        <Input className="input" />
        <Button onClick={props.addTodo} type="primary">Add</Button>
      </div>
    </Wrapper>
  )
}

export default connect(state => ({
  todos: Object.values(state.Todo)
}), ({ Todo: { addTodo }}) => ({
  addTodo
}))(List)
