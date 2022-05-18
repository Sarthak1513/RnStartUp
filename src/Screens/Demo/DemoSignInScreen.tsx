import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useForm} from 'react-hook-form';
import AppBar from 'src/Components/AppBar/AppBar';
import Block from 'src/Components/Block/Block';
import Body from 'src/Components/Body/Body';
import Button from 'src/Components/Button/Button';
import Container from 'src/Components/Container/Container';
import FormBuilder from 'src/Components/FormBuilder/FormBuilder';
import IconButton from 'src/Components/IconButton/IconButton';
import Typography from 'src/Components/Typography/Typography';
import {getEmailValidationRules, getRequiredRules} from 'src/Utils/Helpers';

function DemoSignInScreen() {
  const navigation = useNavigation();
  //@ts-ignore
  const {control, setFocus, handleSubmit} = useForm<Sign_In>({
    defaultValues: {
      phone_no: '',
      password: '',
    },
    mode: 'onChange',
  });
  return (
    <Container>
      <AppBar
        title={'HelloApp'}
        left={
          <IconButton
            name={'plus'}
            iconVariant={'white'}
            onPress={() => {
              navigation.goBack();
            }}
          />
        }
        right={
          <IconButton
            name={'logout'}
            iconVariant={'white'}
            //@ts-ignore
            onPress={() => navigation.navigate('Subject')}
          />
        }
      />
      <Body>
        <Block flexDirection={'row'} alignSelf={'center'}>
          <Block width={150} top={40}>
            <Button height={80}>LogIn</Button>
          </Block>
          <Block width={150} top={40}>
            <Button backgroundColor={'white'} height={80}>
              <Typography>Sign In</Typography>
            </Button>
          </Block>
        </Block>
        <Block style={{paddingHorizontal: 30, top: 60}}>
          <FormBuilder
            control={control}
            setFocus={setFocus}
            formConfigArray={[
              {
                name: 'Phone',
                type: 'phone',
                label: 'Contect',
                textInputProps: {
                  placeholder: '+(000) 000-00-00',
                },
              },
              {
                name: 'password',
                type: 'password',
                label: 'Password',
                textInputProps: {
                  placeholder: 'Password',
                },
                rules: getRequiredRules('Password'),
              },
            ]}
          />
        </Block>
        <Block top={100}>
          <Block paddingHorizontal={80}>
            <Button height={70} borderRadius={60}>
              {' '}
              SignUp
            </Button>
          </Block>
          <Typography top={10} alignSelf={'center'} fontSize={20}>
            {' '}
            Forgot your password?
          </Typography>
        </Block>
      </Body>
    </Container>
  );
}

export default DemoSignInScreen;
