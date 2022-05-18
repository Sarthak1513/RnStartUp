import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import AppBar from 'src/Components/AppBar/AppBar';
import Block from 'src/Components/Block/Block';
import Body from 'src/Components/Body/Body';
import Container from 'src/Components/Container/Container';
import IconButton from 'src/Components/IconButton/IconButton';
import Picture from 'src/Components/Picture/Picture';
import Typography from 'src/Components/Typography/Typography';
import {resetAuthValue} from 'src/Modules/AuthModule/Hooks/useAuthValue';
import {AuthStackParamList} from 'src/Navigation/StackNavigators/AuthStackNavigator';

function DemoScreen2() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList, 'Home'>>();
  return (
    <Container>
      <AppBar
        title={'RentApp'}
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
            onPress={() => navigation.navigate('SignIn')}
          />
        }
      />

      <Body>
        <Block backgroundColor={'#F2F4F7'} height={150}>
          <Typography fontSize={20} alignSelf={'center'} top={20}>
            “We make a living by what we get, {'\n'} but we make a lifeby what
            we give.” ― Winston Churchill
          </Typography>
        </Block>

        <Typography fontSize={20} alignSelf={'center'} top={50}>
          I am a student
        </Typography>

        <Picture
          source={{
            uri: 'file:///Users/adnin/Desktop/Screenshot%202022-05-13%20at%205.38.22%20PM.png',
          }}
          height={100}
          top={80}
          alignSelf={'center'}
          width={240}
        />

        <Typography borderWidth={0.3} top={110} borderBottomColor={'white'} />
        <Typography fontSize={20} alignSelf={'center'} top={150}>
          I am a teacher
        </Typography>
        <Picture
          source={{
            uri: 'file:///Users/adnin/Desktop/Screenshot%202022-05-13%20at%205.38.41%20PM.png',
          }}
          height={120}
          top={180}
          alignSelf={'center'}
          width={240}
        />
      </Body>
    </Container>
  );
}

export default DemoScreen2;
