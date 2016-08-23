import React from 'react';

class ButtonApp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input type="submit" value={this.props.world} />
    );
  }
}

export default ButtonApp;
