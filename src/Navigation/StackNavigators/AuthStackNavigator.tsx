import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from 'src/Screens/Home/HomeScreen';
import {Platform} from 'react-native';
import {POST} from 'src/Modules/PostModule/Types/ResponseTypes';
import DetailScreen from 'src/Screens/Detail/DetailScreen';
import PostScreen from 'src/Screens/Post/PostScreen';
import DemoScreen from 'src/Screens/Demo/DemoScreen';
import DemoScreen2 from 'src/Screens/Demo/DemoScreen2';
import DemoSignInScreen from 'src/Screens/Demo/DemoSignInScreen';
import DemoSubjectScreen from 'src/Screens/Demo/DemoSubjectScreen';
import DemoMathematics from 'src/Screens/Demo/DemoMathematics';
import DemoQuestionScreen from 'src/Screens/Demo/DemoQuestionScreen';
import DemoPhysicScreen from 'src/Screens/Demo/DemoPhysicScreen';
import DemoNew from 'src/Screens/Demo/DemoNew';

export type AuthStackParamList = {
  Home: undefined;
  Post: {mode: 'add' | 'edit'; post?: POST};
  Detail: {id: number};
  name:{
    email:'any'
    
  }
  Demo:any
  Demo2:any
  SignIn:any
  Subject:any
  Maths:any
  Que:any
  Physic:any
  New:any
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default',
        headerShown: false,
      }}>
      <AuthStack.Screen name={'Home'} component={HomeScreen} />
      <AuthStack.Screen name={'Post'} component={PostScreen} />
      <AuthStack.Screen name={'Detail'} component={DetailScreen} />
      <AuthStack.Screen name={'Demo'} component={DemoScreen} />
      <AuthStack.Screen name={'Demo2'} component={DemoScreen2} />
      <AuthStack.Screen name={'SignIn'} component={DemoSignInScreen} />
      <AuthStack.Screen name={'Subject'} component={DemoSubjectScreen} />
      <AuthStack.Screen name={'Maths'} component={DemoMathematics} />
      <AuthStack.Screen name={'Que'} component={DemoQuestionScreen} />
      <AuthStack.Screen name={'Physic'} component={DemoPhysicScreen} />
      <AuthStack.Screen name={'New'} component={DemoNew} />
      


    
    
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
