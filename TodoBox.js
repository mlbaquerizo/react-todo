import React from 'react';
import ReactDOM from 'react-dom';

// -TodoBox
//   -TodoList
//     -TodoItem
//       -ItemStatusForm
//   -TodoForm

class TodoBox extends React.Component {
	constructor(){
		super();
		this.state = {
			data: []
		};
		this.loadItemsFromServer = this.loadItemsFromServer.bind(this);
	}
	loadItemsFromServer(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err){
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}
	componentDidMount(){
		this.loadItemsFromServer();
		setInterval(this.loadItemsFromServer, this.props.pollInterval);
	}
  render(){
    return (
    	<div className="todoBox">
	    	<h1>Todo</h1>
    		<TodoList data={this.state.data} />
    		<TodoForm />
    	</div>
  	)
  }
}

class TodoList extends React.Component {
	render(){
		var listNodes = this.props.data.map(function(item){
			return (
				<TodoItem id={item.id} text={item.text}>
				</TodoItem>
			)
		})
		return (
			<div className="todoList">
				<ul>{listNodes}</ul>
			</div>
		)
	}
}

class TodoItem extends React.Component {
	render(){
		return (
			<div className="todoItem">
				<li>
					{this.props.id}: {this.props.text}
				</li>
			</div>
		)
	}
}

class TodoForm extends React.Component {
	render(){
		return (
			<div className="todoForm">
				I am a form
			</div>
		)
	}
}

export default TodoBox
