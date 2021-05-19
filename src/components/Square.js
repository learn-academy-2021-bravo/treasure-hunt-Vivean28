import React, { Component } from 'react'

class Square extends Component{

  handelClick = () => {
    this.props.handleGamePlay(this.props.index)
  }
  render(){
    return(
      <>
      <div className="square" onClick={this.handelClick}>
       
        {this.props.value}
      
        </div>
      </>
    )
  }
}
export default Square
