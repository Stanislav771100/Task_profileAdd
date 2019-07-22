import './Main.css'
import React, { Component } from 'react'
import Profile from './Profile'
import Addprofile from './Addprofile'

class Main extends Component {
  constructor (props) {
    super()
    this.state = {
      users: [],
      
      
    }
  }
  addUsers = (user) => {
    
    let users = this.state.users
    users.push(user)
    this.setState({users})
    console.log(this.state.users)
  }

  render () {
    return (
      <div className='mainpage'>
        <header>
          <h1>Profiles</h1>
        </header>
        <Addprofile addUsers = {(users) => { this.addUsers(users)}} />
        
        <div className='profiles_content'>
          
          {this.state.users.map((user, index)=>{

            return(
                <div className='block' key={index}>
                <Profile
                user={user}
                index={index}

                />
                </div>
            )

            })}
        </div>
      </div>
    )
  }
}

export default Main
