import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';
import ButtonApp from './ButtonApp.jsx';
import TodoApp from './TodoApp.jsx'

var BUTTONTEXT = "Click the button";
var TODOS = ["Zadanie nr 1", "Zadanie nr 2", "Zadanie nr 3"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter : 10, todos2: ["get food","drive home","eat food", "sleep"],TODOS : ["Zadanie nr 1", "Zadanie nr 2", "Zadanie nr 3"] };
    this.onUserClick = this.onUserClick.bind(this);
    this.addNewItemClick = this.addNewItemClick.bind(this);
  }

  onUserClick()
  {
    let counterValue = this.state.counter + 1;
    this.setState({ counter: counterValue });
  }
  addNewItemClick(childComponent)
  {
    this.setState({TODOS: this.state.TODOS.concat(childComponent.state.value)});
  }


  render () {
    var todos = this.state.todos2.map(function(todo,index){
       return <li key={index}>{todo}</li>
   });

    return <div>
                <p> Hello React!</p>
                <AwesomeComponent/>
                <ButtonApp world={this.props.world}  counter={this.state.counter} onUserClick={this.onUserClick} />
                  <ul>
                      {todos}
                  </ul>

                <hr />
                <TodoApp todos={this.state.TODOS} addNewItemClick={this.addNewItemClick} />

            </div>;
  }
}

render(<App world={BUTTONTEXT} />, document.getElementById('app'));
