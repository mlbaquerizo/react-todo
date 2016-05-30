import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div className="list">
        <List />
      </div>
    )
  }
}

class List extends React.Component {
  render() {
    var itemNodes = listData.map(function(item){
      return <ListItem status={item.status} text={item.text} />
    });
    return (
      <table>{itemNodes}</table>
    );
  }
}

const ListItem = (props) => {
  return (
    <tr>
      <td>{props.status}</td>
      <td>{props.text}</td>
    </tr>
  )
}

var listData = [
  {id: 1, status: "pending", text: "Walk the dog", tags: ["dog"]},
  {id: 2, status: "pending", text: "Buy groceries", tags: ["food", "home"]}
]

export default Todo
