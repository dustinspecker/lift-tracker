import React from 'react';
import ReactDOM from 'react-dom';

import LiftList from './components/lift-list';

const lifts = [
  {name: 'squat', weight: 200},
  {name: 'bench', weight: 100},
  {name: 'deadlift', weight: 300}
];

ReactDOM.render(
  <LiftList lifts={lifts} />,
  document.getElementById('app')
);
