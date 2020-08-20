import React, { Component } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

const Div = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 90px;

  &.background-mask {
    background: linear-gradient(143deg, rgba(78,0,246,0.2) 0%, rgba(0,0,0,1) 100%);
  }
`

export default class extends Component {
  scrollTop = () => {
    this._div.scrollTop = 0
  }

  render() {
    const { children, toolbar, className, triangeStyle, ...props } = this.props

    return (
      <Div
        {...props}
        ref={(ref) => { this._div = ref }}
        className={classNames(toolbar && 'with-toolbar', className)}
      >
        {children}
      </Div>
    )
  }
}
