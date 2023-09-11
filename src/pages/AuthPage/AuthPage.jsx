import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

import { Flex, Text, Button, Box, Card } from '@radix-ui/themes';

import "./style.css"


export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
      <Flex className="container"  direction="column" align="center" justify="center">
        <Card  className="authCard">
          <h1>Sign In or Sign Up!</h1>

          {showSignUp ?
            <>
              <SignUpForm setUser={setUser} />
              <div>
              <Text mx="5">Already a member?</Text>
              <Button onClick={() => setShowSignUp(!showSignUp)}>Log In</Button>
</div>
            </>
            :

            <>
              <LoginForm setUser={setUser} />
              <div>
                <Text mx="5" >Not a member yet?</Text>
                <Button onClick={() => setShowSignUp(!showSignUp)}>Sign Up</Button>
              </div>
            </>

          }

        </Card>
      </Flex>
  );
}