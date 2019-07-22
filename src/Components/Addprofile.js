import './Addprofile.css'
import React, { Component } from 'react'

class Addprofile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nameProfile: '',
      workProfile: '',
      wageProfile: 0,
      value: ''
    }
  }

  render () {
    return (
      <div className='add_list'>
        <div className='head_add'>
          <h2>
              Add Profile
          </h2>
        </div>
        <div className='add_form'>

          <input value={this.state.nameProfile} onChange={(e) => { this.setState({ nameProfile: e.target.value }) }} type='text' placeholder='Name' />
          <input value={this.state.workProfile} onChange={(e) => { this.setState({ workProfile: e.target.value }) }} type='text' placeholder='Work' />
          <input value={this.state.wageProfile} onChange={(e) => { this.setState({ wageProfile: e.target.value }) }} type='text' placeholder='Min wage' />

        </div>
        <div className='botton_contain'>
          <button onClick={() => {
            this.props.addUsers({ name: this.state.nameProfile, workProfile: this.state.workProfile, wageProfile: this.state.wageProfile })
            this.setState({ value: '' })
          }}> ADD </button>
        </div>
      </div>
    )
  }
}

export default Addprofile
