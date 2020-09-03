import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Page4 extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'高阶用法'
    } 
  }
  render() {
    return (
      <div>
        {this.state.name}
      </div>
    )
  }
}

Page4.propTypes = {
  name:PropTypes.string
}

export default Page4;
