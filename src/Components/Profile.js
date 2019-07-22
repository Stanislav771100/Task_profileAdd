import './Profile.css'
import React, { Component } from 'react'

class Profile extends Component {
  render () {
    console.log(this.props)
    return (
      <div className='block_user'>
        <div className='name'>
          <p>{this.props.user.name}</p>
        </div>
        <div className='work'>
          <p>{this.props.user.workProfile}</p>
        </div>
        <div className='wage'>
          <p>{this.props.user.wageProfile}</p>
        </div>
      </div>
    )
  }
}

export default Profile
