import React from 'react'
import { AppLoading } from 'expo'

class Boot extends React.Component {
  componentDidMount () {
    this.props.onBoot()
  }

  render () {
    return (
      <AppLoading />
    )
  }
}

export default Boot
