import PureRenderMixin from 'react-addons-pure-render-mixin'
import React from 'react'

export default React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  mixins: [PureRenderMixin],
  render() {
    return <div>{this.props.name}</div>
  }
})
