import React from 'react';

class ButtonApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { active: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick()
  {
    let isActive = !this.state.active;
    this.setState({ active: isActive });
  }

  render() {

    var buttonSwitch = this.state.active ? "On" : "Off";

    return (
    <div>
        <p>Click the button!</p>
        <input type="submit" value={this.props.world} onClick={this.handleClick} />
        <p>{buttonSwitch}</p>
    </div>
    );
  }
}

export default ButtonApp;
