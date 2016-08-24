import React from 'react';


class TodoAddNewItemApp extends React.Component {

constructor(props){
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
      console.log('event:'+ event.target.value);
      this.setState({value: event.target.value});
      console.log('value:'+ this.state.value);
    }
 handleClick() {
  this.props.addNewItemClick(this);
 }
  render() {

      return(
        <div>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="Add new item" onClick={this.handleClick} />
        </div>
      );
  }

}

export default TodoAddNewItemApp;
