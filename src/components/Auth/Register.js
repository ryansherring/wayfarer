import React, { Component } from 'react';
import axios from 'axios';
import { Button, Checkbox, Form } from 'semantic-ui-react'


class Register extends Component {
    state = {
      name: '',
      email: '',
      password: '',
      password2: ''
    };
  
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };
  
    handleSubmit = event => {
      event.preventDefault()
      console.log(this.state)
      axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, this.state)
      .then(res => {
        console.log(res);
        this.props.history.push('/login');
      }).catch(err => {
        console.log(err.response);
      });
    };
  
    render() {
      return (
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
                <button className='btn btn-primary float-right' type='submit'>
                  Register
                </button>
              </Form>
            </div>
          </div>
        </div>
      );
    }
  }


  const FormExampleForm = () => (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )
  
export default Register;