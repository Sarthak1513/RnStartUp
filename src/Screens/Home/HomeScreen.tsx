import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image} from 'react-native';

import AppBar from 'src/Components/AppBar/AppBar';
import Container from 'src/Components/Container/Container';
import IconButton from 'src/Components/IconButton/IconButton';
import Button from 'src/Components/Button/Button';
import Picture from 'src/Components/Picture/Picture';
import Typography from 'src/Components/Typography/Typography';
import {resetAuthValue} from 'src/Modules/AuthModule/Hooks/useAuthValue';
import PostList from 'src/Modules/PostModule/Components/PostList/PostList';
import Block from 'src/Components/Block/Block';
import {AuthStackParamList} from 'src/Navigation/StackNavigators/AuthStackNavigator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import  {TouchableOpacity}  from 'react-native';
import Body from 'src/Components/Body/Body';

function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList, 'Home'>>();

  return (
    <Container variant={'background'} backgroundColor="#1976d2">
      <AppBar
        title={'Home'}
        left={
          <IconButton
            name={'plus'}
            iconVariant={'white'}
           
          />
        }
        right={
          <IconButton
            name={'logout'}
            iconVariant={'white'}
            // onPress={resetAuthValue}
            onPress={() => {
              //@ts-ignore
              navigation.navigate('Demo2')
            }}
          />
        }
      />
       <Body>
      <Picture
        height={280}
        width={380}
        alignSelf={'center'}
        borderRadius={20}
        source={{
          uri: 'file:///Users/adnin/Desktop/Screenshot%202022-05-13%20at%203.18.37%20PM.png',
        }}
      />
     
      <Typography alignSelf="center" color="white" top={20} fontSize={23}>
        You can study various {'\n'} sciences right at home{' '}
      </Typography>
      <Block style={{paddingHorizontal: 79, top: 70}}>
        <Button   onPress={() => {
          //@ts-ignore
              navigation.navigate('Demo');
            }}
        backgroundColor={'white'} height={100} borderRadius={55}>
          <Typography alignSelf="center" fontSize={25} fontWeight={'700'}>
            Next
            <Block style={{paddingStart:20}}>
            <Icon name="arrow-forward-ios" size={25} />
            </Block>
          </Typography>
        </Button>
        <Typography
        top={25}
          alignSelf="center"
          color="white"
          fontSize={20}
          fontWeight={'600'}
          marginTop={16}>
          Don't have an account?{' '}
        </Typography>
        <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
        <Typography
          alignSelf="center"
          color="white"
          fontSize={23}
          fontWeight={'600'}
         top={30}
          textDecorationLine={'underline'}>
          Sign In here{' '}
        </Typography>
        </TouchableOpacity>
        
      </Block>
      {/* <PostList /> */}
      </Body>
    </Container>
  );
}

export default HomeScreen;
