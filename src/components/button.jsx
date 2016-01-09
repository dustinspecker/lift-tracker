import PureRenderMixin from 'react-addons-pure-render-mixin'
import React from 'react'

const Button = React.createClass({
  propTypes: {
    handleClick: React.PropTypes.func.isRequired,
    text: React.PropTypes.string
  },
  mixins: [PureRenderMixin],
  render() {
    return <button
      onClick={this.props.handleClick}
      text={this.props.text}
    >
      {this.props.text}
    </button>
  }
})

export default Button
