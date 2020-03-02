import React, { Component } from 'react'
import { Button, Modal, Form, } from 'semantic-ui-react';
import axios from 'axios'
import { render } from '@testing-library/react';



class Login extends Component {
    state = {
      email: '',
      password: ''
    };
  
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
  
    handleSubmit = event => {
      event.preventDefault();
      axios
        .post(`${process.env.REACT_APP_API_URL}/login`, this.state, {withCredentials: true})
        .then(res => {
          console.log(res);
          this.props.setCurrentUser(res.data.data)
          this.props.history.push('/');
        })
        .catch(err => {
          console.log(err);
        })
    };

    render(){
        return(
            <Modal trigger={<Button> Log In!</Button>}>
            <Modal.Header>Log In!</Modal.Header>
            <Modal.Content Form>
              <Modal.Description>
                <p>Sign Up!</p>
              </Modal.Description>
              <div className='container mt-4'>
                <div className='row'>
                  <div className='col-md-4 offset-md-4'>
                    <h4 className='mb-3'>Register</h4>
                     <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                          <label htmlFor='name'>Email</label>
                          <input
                            onChange={this.handleChange}
                            className='form-control form-control-lg'
                            type='email'
                            id='email'
                            name='email'
                            value={this.state.email}
                          />
                        </Form.Field>
                        <Form.Field>
                          <label htmlFor='name'>Password</label>
                          <input
                            onChange={this.handleChange}
                            className='form-control form-control-lg'
                            type='password'
                            id='password'
                            name='password'
                            value={this.state.password}
                          />
                        </Form.Field>
                      </Form> 
                    </div>
                  </div>
                </div>
            </Modal.Content>
            <Modal.Actions>
              <button className='btn btn-primary float-right' onClick={this.handleSubmit}>
                  Login
              </button>
            </Modal.Actions>
          </Modal>
        );
        }
    }

    

    
export default Login;