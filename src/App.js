import React from 'react';
import { Provider } from 'react-redux'
import styled from 'styled-components'
import 'antd/dist/antd.css';
import List from './containers/List'
import store from './redux/store'

const Wrapper = styled.div`
  padding: 80px 16px;
  max-width: 600px;
  margin: 0 auto;
  header {
    margin-bottom: 48px
    .brand {
      text-align: center;
    }
  }
`

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <header>
          <h1 className="brand">Noukod Todo</h1>
        </header>
        <List></List>
      </Wrapper>
    </Provider>
  );
}

export default App;
