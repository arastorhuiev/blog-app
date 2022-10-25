import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { TextField, Button, Stack, Typography } from '@mui/material';

type IUserData = {
  email: string;
  password: string;
};

export function SignIn() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  function handleCreateUser(userData: IUserData): void {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        console.log('userCredential >>>', userCredential);
        const user = userCredential.user;
        console.log('user >>>', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log('errorCode >>>', errorCode);
        const errorMessage = error.message;
        console.log('errorMessage >>>', errorMessage);
      });
  }

  return (
    <Stack>
      <Typography>SIGN IN</Typography>
      <TextField
        required
        label='email'
        variant='outlined'
        onChange={(event) => setUserEmail(event.target.value)}
      />
      <TextField
        required
        label='password'
        variant='outlined'
        onChange={(event) => setUserPassword(event.target.value)}
      />
      <Button
        variant='contained'
        onClick={() =>
          handleCreateUser({ email: userEmail, password: userPassword })
        }>
        Login
      </Button>
    </Stack>
  );
}
