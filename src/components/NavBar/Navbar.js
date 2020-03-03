import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import Register from './Modal/ModalRegister';
import Login from './Modal/ModalLogin';
import App from '../../App'


class MenuExampleBasic extends Component {
  state = {
    // sets default active item
    activeItem: 'profile'
  }
  // passes props to the navbar - e=event
  handleItemClick = (e, props) => this.setState({ activeItem: props.name })


  render = props => {
    const { activeItem } = this.state
    return (
      <Menu>
        <Menu.Item header><Link to='/'>Wayfarer</Link></Menu.Item>
        <Menu.Menu position='right'>
            <>
            <Menu.Item>
              < Register />
            </Menu.Item>

            <Menu.Item>
              < Login />
            </Menu.Item>
            </>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          >
            
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      
    )
  }
}

export default MenuExampleBasic