import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Flex, Text, Button, Box } from '@radix-ui/themes';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Form from '@radix-ui/react-form';

import { signUp } from '../../utilities/users-service';


import "./style.css"

export default function SignUpForm({ setUser }) {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });
  const [error, setError] = useState('');


  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }
 async function handleSubmit(evt){
    evt.preventDefault();
    try {
      const {name, email, password} = credentials;
      const formData = {name, email, password};
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      setUser(user);
      navigate("/today")
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      // setState({ error: 'Sign Up Failed - Try Again' });
    }
  };



  return (
    <>
  <Form.Root className="FormRoot" onSubmit={handleSubmit}>
    <Form.Field className="FormField" name="name">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Name</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter your name
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input onChange={handleChange} className="Input" type="text" required />
      </Form.Control>
    </Form.Field>
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
      </div>
      <Form.Control asChild>
        <input onChange={handleChange} className="Input" type="password" required />
      </Form.Control>
    </Form.Field>

    <Form.Field className="FormField" name="confirm">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <Form.Label className="FormLabel">Confirm Password</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          Please enter your password again for confirmation
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input onChange={handleChange} className="Input" type="password" required />
      </Form.Control>
    </Form.Field>
    <Form.Submit asChild>
      <Button type="submit" className="Button" style={{ marginTop: 10 }}>
        Sign Up
      </Button>
    </Form.Submit>
  </Form.Root>
    <p className="error-message">&nbsp;{error}</p>
</>
  );
}