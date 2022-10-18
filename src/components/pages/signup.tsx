import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Box, TextField, Button } from '@mui/material';

type IUserData = {
  email: string;
  password: string;
};

export function SignUp() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  function handleCreateUser(userData: IUserData): void {
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password,
    ).then(( user ) => {
      console.log(user);
    });
  }

  return (
    <Box sx={{ maxWidth: '450px', display: 'flex', flexDirection: 'column', gap: 1 }}>
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
        onClick={() => handleCreateUser({ email: userEmail, password: userPassword })}>
        Login
      </Button>
    </Box>
  );
}
