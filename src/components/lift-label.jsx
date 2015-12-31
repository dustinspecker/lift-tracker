import React from 'react'

export default React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render() {
    return <div>{this.props.name}</div>
  }
})
