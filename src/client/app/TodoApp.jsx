import React from 'react';
import TodoItemApp from './TodoItemApp.jsx'
import TodoAddNewItemApp from './TodoAddNewItemApp.jsx'

class TodoApp extends React.Component {
constructor(props){
    super(props);
  }

render() {

const todoItems = this.props.todos.map((todo,index) => {
  return <TodoItemApp caption={todo} key={index} />
});

    return(
      <div>
          <TodoAddNewItemApp addNewItemClick={this.props.addNewItemClick} />
          <hr />
          {todoItems}
      </div>
    );
}

}

export default TodoApp;
