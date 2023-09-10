import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';


import { Flex, Text, Button, Box } from '@radix-ui/themes';

import "./style.css"


export default function AuthPage({ setUser }) {

  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main>
    <Flex direction="column" align="center" justify="center">
      <h1>Sign In or Sign Up!</h1>

      {showSignUp ?
        <>
          <SignUpForm setUser={setUser} />
            <Text mx="5">Already a member?</Text>
          <Button onClick={() => setShowSignUp(!showSignUp)}>Log In</Button>
        </>
        :

        <>          <LoginForm setUser={setUser} />
        <div>
            <Text mx="5">Not a member yet?</Text>
          <Button onClick={() => setShowSignUp(!showSignUp)}>Sign Up</Button>
</div>
        </>

      }

</Flex>
    </main>
  );
}