import React from 'react';
import AppBar from 'src/Components/AppBar/AppBar';
import Body from 'src/Components/Body/Body';
import Container from 'src/Components/Container/Container';
import LoginForm from 'src/Modules/AuthModule/Components/LoginForm/LoginForm';

function LoginScreen() {
  return (
    <Container>
      <AppBar title={'Login'} />

      <LoginForm />
    </Container>
  );
}

export default LoginScreen;
