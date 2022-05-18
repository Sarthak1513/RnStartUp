import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Button, TextInput, View} from 'react-native';
import IconButton1 from 'react-native-vector-icons/AntDesign';
import AppBar from 'src/Components/AppBar/AppBar';
import Block from 'src/Components/Block/Block';
import Body from 'src/Components/Body/Body';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Foundation';
import Container from 'src/Components/Container/Container';
import FormBuilder from 'src/Components/FormBuilder/FormBuilder';
import IconButton from 'src/Components/IconButton/IconButton';
import Typography from 'src/Components/Typography/Typography';

function DemoPhysicScreen() {
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
                //@ts-ignore
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
        {/* <Block paddingHorizontal={20} flex={1} >
         <Block >
         <IconButton1  name='search1' size={20}/>
         </Block>
       <Block >
       <FormBuilder
            control={control}
            setFocus={setFocus}
            formConfigArray={[
              {
                name: 'Search',
                type: 'text',
                label: 'Search Bar',
                textInputProps: {
                  placeholder: 'Enter',
                },
              },
             
            ]}
          />
          </Block>
            </Block> */}
        <View
          style={{
            backgroundColor: '#F0F0F0',
            marginHorizontal: 20,
            height: 50,
            marginVertical: 10,
            borderRadius: 30,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <IconButton1 name="search1" size={25} />
          <TextInput
            autoCapitalize="none"
            placeholder="Enter Email"
            style={{
              borderWidth: 0,
              fontSize: 14,
              flex: 1,
            }}
          />
        </View>
        <Block
          backgroundColor={'#F2F4F7'}
          marginHorizontal={5}
          shadowOpacity={0.2}
          top={20}>
            <Block left={30} width={150}borderWidth={1}  borderRadius={30} top={8} backgroundColor={'cornflowerblue'}>
            <Button  color='white'title='learn Science' />
            </Block>
          <Typography fontSize={30} left={40} top={15}>
            The Most Important {'\n'} principles of Physics{' '}
          </Typography>
          <Block
            height={170}
            marginHorizontal={6}
            borderRadius={20}
            shadowOpacity={0.2}
            backgroundColor={'white'}
            top={70}>
            <Typography fontSize={25} left={50} top={40} fontWeight={'600'}>
              Physics
            </Typography>
            <Typography fontSize={20} top={50} left={49}>
              24 Courses
            </Typography>
            <Block alignSelf={'flex-end'} right={20} bottom={30}>
              <Icon name="logo-electron" size={100} color='#7b68ee'/>
            </Block>
          </Block>
          <Block
            height={170}
            marginHorizontal={6}
            borderRadius={20}
            shadowOpacity={0.2}
            backgroundColor={'white'}
            top={90}>
            <Typography fontSize={25} left={50} top={40} fontWeight={'600'}>
              Literature
            </Typography>
            <Typography fontSize={20} top={50} left={50}>
              24 Courses
            </Typography>
            <Block alignSelf={'flex-end'} right={30} bottom={30}>
              <Icon2 name="book-bookmark" size={100}  color='#7b68ee'/>
            </Block>
          </Block>
          <Block
            height={170}
            marginHorizontal={6}
            borderRadius={20}
            shadowOpacity={0.2}
            backgroundColor={'white'}
            top={110}>
            <Typography fontSize={25} left={50} top={40} fontWeight={'600'}>
              Management
            </Typography>
            <Typography fontSize={20} top={50} left={49}>
              24 Courses
            </Typography>
            <Block alignSelf={'flex-end'} right={20} bottom={30}>
              <Icon1 name="briefcase" size={100} color='#7b68ee' />
            </Block>
          </Block>
        </Block>
      </Body>
    </Container>
  );
}

export default DemoPhysicScreen;
