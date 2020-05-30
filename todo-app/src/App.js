import React, { Fragment } from 'react';
import './reset.css'
import Form from './components/Form/Form'
import TodoList from './components/TodoList/TodoList'

function App() {
  return (
    <Fragment>

      <Form/>
      <TodoList/>

    </Fragment>
  );
}

export default App;
