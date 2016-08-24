import React from 'react';


class TodoItemApp extends React.Component {

constructor(props){
    super(props);
  }

  render() {

      return(
        <div>
            {this.props.caption}
        </div>
      );
  }

}

export default TodoItemApp;
