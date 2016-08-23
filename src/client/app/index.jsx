import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';
import ButtonApp from './ButtonApp.jsx';

var BUTTONTEXT = "Click the button";

class App extends React.Component {
  render () {
    return <div><p> Hello React!</p>
                <AwesomeComponent/>
                <ButtonApp world={this.props.world} />
            </div>;
  }
}

render(<App world={BUTTONTEXT} />, document.getElementById('app'));
