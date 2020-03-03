import React, { Component } from 'react'
import { Button, Modal, Form, } from 'semantic-ui-react';
import axios from 'axios'
import { render } from '@testing-library/react';



class Register extends Component {
    state = {
      name: '',
      email: '',
      password: '',
      password2: ''
    };
  
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }; // makes the form fillable

      handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        axios.post(`${process.env.REACT_APP_API_URL}/signup`, this.state)
        .then(res => {
          console.log(res);
        this.props.history.push('/login');
        }).catch(err => {
          console.log(err.response);
        }); // on submit
      };

      render(){
        return(
            <Modal trigger={<Button>Sign Up</Button>}>
            <Modal.Header>Register!</Modal.Header>
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
                          <label htmlFor='name'>Name</label>
                          <input
                            onChange={this.handleChange}
                            className='form-control form-control-lg'
                            type='text'
                            id='name'
                            name='name'
                            value={this.state.name}
                          />
                        </Form.Field>
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
                        <Form.Field>
                          <label htmlFor='password2'>Confirm Password</label>
                          <input
                            onChange={this.handleChange}
                            className='form-control form-control-lg'
                            type='password'
                            id='password2'
                            name='password2'
                            value={this.state.password2}
                          />
                        </Form.Field>
                        <Form.Field>
                          <label htmlFor='homeCity'>Home City</label>
                          <input
                            onChange={this.handleChange}
                            className='form-control form-control-lg'
                            type='text'
                            id='homeCity'
                            name='homeCity'
                            value={this.state.homeCity}
                          />
                        </Form.Field>
                      </Form> 
                    </div>
                  </div>
                </div>
            </Modal.Content>
            <Modal.Actions>
              <button className='btn btn-primary float-right' onClick={this.handleSubmit}>
                  Register
              </button>
            </Modal.Actions>
          </Modal>
        );
        }
    }

    

    
export default Register;