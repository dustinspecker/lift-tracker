import AppBar from 'material-ui/lib/app-bar'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import React from 'react'

import LiftList from '../containers/lift-list'

const App = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return <div>
      <AppBar
        showMenuIconButton={false}
        title='Lift Tracker'
      />
      <LiftList />
    </div>
  }
})

export default App
