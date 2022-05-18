import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {color} from 'react-native-reanimated';
import AppBar from 'src/Components/AppBar/AppBar';
import Block from 'src/Components/Block/Block';
import Body from 'src/Components/Body/Body';
import Button from 'src/Components/Button/Button';
import Container from 'src/Components/Container/Container';
import FormBuilder from 'src/Components/FormBuilder/FormBuilder';
import InputText from 'src/Components/InputText/InputText';
import Picture from 'src/Components/Picture/Picture';
import Touch from 'src/Components/Touch/Touch';
import Typography from 'src/Components/Typography/Typography';
import LoginForm from 'src/Modules/AuthModule/Components/LoginForm/LoginForm';
import RegisterForm from 'src/Modules/AuthModule/Components/RegisterForm/RegisterForm';
import {getEmailValidationRules, getRequiredRules} from 'src/Utils/Helpers';

function DemoScreen() {
  //@ts-ignore
  const {control, setFocus, handleSubmit} = useForm<Demo>({
    defaultValues: {
      First_name: '',
      Last_name: '',
      Address: '',
    },
    mode: 'onChange',
  });
  const navigation = useNavigation();
  return (
    <Container backgroundColor="skyblue">
      <AppBar title="Demo" />

      <Body>
        <Picture
          height={300}
          width={380}
          style={{marginHorizontal: 20, alignSelf: 'center', borderRadius: 20}}
          source={{
            uri: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
          }}></Picture>
        <Block style={{height: 20}} />
        <Block
          style={{
            shadowOpacity: 0.2,
            marginHorizontal: 20,
            backgroundColor: 'white',
            paddingBottom: 30,
            borderRadius: 20,
          }}>
          <Block>
            <Typography
              fontSize={30}
              fontWeight={'700'}
              style={{alignSelf: 'center'}}>
              Hello India
            </Typography>
            <Block style={{paddingHorizontal: 30}}>
              <FormBuilder
                control={control}
                setFocus={setFocus}
                formConfigArray={[
                  {
                    name: 'Name',
                    type: 'text',
                    label: 'Name',
                    textInputProps: {
                      placeholder: 'First_Name',
                    },
                  },
                  {
                    name: 'Last_Name',
                    type: 'text',
                    label: 'LastName',
                    textInputProps: {
                      placeholder: 'Last_Name',
                    },
                  },
                  {
                    name: 'Last_Name',
                    type: 'text',
                    label: 'Address',
                    textInputProps: {
                      placeholder: 'Address',
                    },
                  },
                ]}
              />
            </Block>
            <Block style={{height: 40}} />
            <Block alignItems="center">
              <Button
                backgroundColor={'grey'}
                borderWidth={1}
                height={50}
                width={250}
                onPress={() => {
                  //@ts-ignore
                  navigation.navigate('Home');
                }}>
                {' '}
                Go To Home Page
              </Button>
            </Block>
          </Block>
        </Block>
      </Body>
    </Container>
  );
}
export default DemoScreen;
