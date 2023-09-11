import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { Flex, Text, Button, Box } from '@radix-ui/themes';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Form from '@radix-ui/react-form';

import * as usersService from '../../utilities/users-service';

import "./style.css"

export default function LoginForm({ setUser }) {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');


  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      navigate("/today")
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <>
      <Form.Root className="FormRoot" onSubmit={handleSubmit}>
        <Form.Field className="FormField" name="email">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Email</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input onChange={handleChange} className="Input" type="email" required />
          </Form.Control>
        </Form.Field>
        <Form.Field className="FormField" name="password">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className="FormLabel">Password</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your password
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch">
              Please provide the correct password
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input onChange={handleChange} className="Input" type="password" required />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <Button type="submit" className="Button" style={{ marginTop: 10 }}>
            Login
          </Button>
        </Form.Submit>
      </Form.Root>
      <p className="error-message">&nbsp;{error}</p>
    </>
  );
}