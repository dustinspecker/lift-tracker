import React from 'react';
import ReactDOM from 'react-dom';

import LiftLabel from './components/lift-label';

const name = 'squat';

ReactDOM.render(
  <LiftLabel name={name} />,
  document.getElementById('app')
);
