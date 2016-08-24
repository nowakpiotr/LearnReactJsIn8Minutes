import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';
import ButtonApp from './ButtonApp.jsx';

var BUTTONTEXT = "Click the button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter : 10, todos: ["get food","drive home","eat food", "sleep"] };
    this.onUserClick = this.onUserClick.bind(this);
  }

  onUserClick()
  {
    let counterValue = this.state.counter + 1;
    this.setState({ counter: counterValue });
  }



  render () {
    var todos = this.state.todos.map(function(todo,index){
       return <li key={index}>{todo}</li>
   });
   
    return <div>
                <p> Hello React!</p>
                <AwesomeComponent/>
                <ButtonApp world={this.props.world}  counter={this.state.counter} onUserClick={this.onUserClick} />

                  <ul>
                      {todos}
                  </ul>
            </div>;
  }
}

render(<App world={BUTTONTEXT} />, document.getElementById('app'));
