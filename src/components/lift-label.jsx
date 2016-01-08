import PureRenderMixin from 'react-addons-pure-render-mixin'
import React from 'react'

export default React.createClass({
  mixins: [PureRenderMixin],
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render() {
    return <div>{this.props.name}</div>
  }
})
