import React from 'react';
import ReactDOM from 'react-dom';

import LiftList from './components/lift-list';

const lifts = ['squat', 'bench', 'deadlifts'];

ReactDOM.render(
  <LiftList lifts={lifts} />,
  document.getElementById('app')
);
