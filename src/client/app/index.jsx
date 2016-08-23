import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';
import ButtonApp from './ButtonApp.jsx';


class App extends React.Component {
  render () {
    return <div><p> Hello React!</p>
                <AwesomeComponent/>
                <ButtonApp/>
            </div>;
  }
}

render(<App/>, document.getElementById('app'));
