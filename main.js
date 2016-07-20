import React from 'react';
import ReactDOM from 'react-dom';
import TodoBox from './TodoBox';

ReactDOM.render(
  <TodoBox url="./listdata.json" pollInterval={3000}/>, document.getElementById('app')
);
