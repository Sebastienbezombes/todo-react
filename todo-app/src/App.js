import React, { Fragment } from 'react';
import './reset.css'
import Form from './components/Form/Form'
import TodoList from './components/TodoList/TodoList'
import Title from './components/Title/Title'

function App() {
  return (
    <Fragment>
      <Title/>
      <Form/>
      <TodoList/>

    </Fragment>
  );
}

export default App;
