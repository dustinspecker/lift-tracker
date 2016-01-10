import PureRenderMixin from 'react-addons-pure-render-mixin'
import React from 'react'

import LiftList from '../containers/lift-list'

const App = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return <LiftList />
  }
})

export default App
