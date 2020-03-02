import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class MenuExampleBasic extends Component {
  state = {
    // sets default active item
    activeItem: 'profile'
  }
  // passes props to the navbar - e=event
  handleItemClick = (e, props) => this.setState({ activeItem: props.name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item header>Wayfarer</Menu.Item>
        <Menu.Menu position='right'>
          <div className='ui right aligned category search item'>
            <div className='ui transparent icon input'>
              <input
                className='prompt'
                type='text'
                placeholder='Search cities...'
              />
              <i className='search link icon' />
            </div>
            <div className='results' />
          </div>
          <Menu.Item
            name='signup'
            active={activeItem === 'signup'}
            onClick={this.handleItemClick}
          >
            <Link to='/signup'>Signup</Link>
          </Menu.Item>

          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          >
            <Link to='/login'>Login</Link>
          </Menu.Item>


          <Menu.Item
            name='profile'
            active={activeItem === 'profile'}
            onClick={this.handleItemClick}
          >
            <Link to='/profile'>Profile</Link>
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          >
            <Link to='#'>Logout</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}