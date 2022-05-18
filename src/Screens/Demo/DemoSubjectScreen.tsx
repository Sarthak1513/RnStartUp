import {useNavigation} from '@react-navigation/native';
import React from 'react';
import AppBar from 'src/Components/AppBar/AppBar';
import Block from 'src/Components/Block/Block';
import Button from 'src/Components/Button/Button';
import Container from 'src/Components/Container/Container';
import IconButton from 'src/Components/IconButton/IconButton';

function DemoSubjectScreen() {
  const navigation = useNavigation();
  return (
    <Container>
      <AppBar
        title={'Subject'}
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
            onPress={() => navigation.navigate('New')}
          />
        }
      />
      <Block style={{height: 20}} />
      <Block marginHorizontal={30}>
        <Button //@ts-ignore
          onPress={() => navigation.navigate('Maths')}>
          Mathematics
        </Button>
        <Block style={{height: 20}} />

        <Button //@ts-ignore
          onPress={() => navigation.navigate('Que')}>
          English
        </Button>
        <Block style={{height: 20}} />
        <Button //@ts-ignore
          onPress={() => navigation.navigate('Physic')}>
          Physic
        </Button>
      </Block>
    </Container>
  );
}

export default DemoSubjectScreen;
