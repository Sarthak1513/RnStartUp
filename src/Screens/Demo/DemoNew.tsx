import React from 'react';
import Body from 'src/Components/Body/Body';
import Container from 'src/Components/Container/Container';
import Typography from 'src/Components/Typography/Typography';
import Block from 'src/Components/Block/Block';
import scaler from 'src/Utils/scaler';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Feather';
import {useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const dataArray = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

function DemoNew() {
  const {width} = useWindowDimensions();
  console.warn({width});
  return (
    <Container>
      <Body>
        <Block
          flex={1}
          padding={20}
          variant="background"
          justifyContent={'space-between'}>
          <ScrollView horizontal>
            <Block justifyContent="space-between" flexDirection="row">
              <Typography color="cornflowerblue" fontSize={25}>
                Activity
              </Typography>
              <Typography color="cornflowerblue" fontSize={25}>
                Learning 
              </Typography>
              <Typography color="cornflowerblue" fontSize={25}>
                Progress
              </Typography>
            </Block>
          </ScrollView>
          <Block
            borderRadius={scaler(20)}
            marginVertical={8}
            variant="white"
            padding={10}
            elevation={10}>
            <Typography fontSize={20} fontWeight={'800'} top={10}>
              March
            </Typography>
            <Block flexDirection={'row'} alignSelf={'flex-end'} bottom={15}>
              <Icon name="left" size={25} />
              <Icon name="right" size={25} />
            </Block>
          </Block>

          <Block
            alignItems={'center'}
            padding={1}
            height={scaler(70)}
            paddingLeft={20}
            borderRadius={scaler(20)}
            justifyContent={'center'}
            marginVertical={8}
            variant="white"
            elevation={10}>
            <Typography fontSize={22} letterSpacing={32}>
              SMTWTFS
            </Typography>
          </Block>
          <Block marginVertical={5} flexWrap={'wrap'} flexDirection={'row'}>
            {dataArray.map((item, index) => (
              <Block
                width={width / 7 - 10}
                height={width / 7 - 10}
                alignItems={'center'}
                justifyContent={'center'}
                margin={2}
                elevation={10}
                variant="white">
                <Typography fontSize={20}>{index + 1}</Typography>
              </Block>
            ))}
          </Block>
          <Block
            padding={10}
            borderRadius={10}
            marginVertical={10}
            justifyContent={'center'}
            // alignItems="center"
            variant="white"
            elevation={10}>
            <Typography fontSize={22} color={'cornflowerblue'}>
              English Spoken 001
            </Typography>
            <Typography
              alignSelf={'flex-end'}
              bottom={scaler(20)}
              fontSize={19}>
              12/05/2022
            </Typography>
            <Typography fontSize={19}>
              {' '}
              Lorem Ispum could not get angry is this {'\n'}worst Situation
            </Typography>
          </Block>
          <Block
            padding={10}
            borderRadius={10}
            marginVertical={10}
            justifyContent={'center'}
            // alignItems="center"
            variant="white"
            elevation={10}>
            <Typography fontSize={22} color={'cornflowerblue'}>
              English Spoken 001
            </Typography>
            <Typography
              alignSelf={'flex-end'}
              bottom={scaler(20)}
              fontSize={19}>
              12/05/2022
            </Typography>
            <Typography fontSize={19}>
              {' '}
              Lorem Ispum could not get angry is this {'\n'}worst Situation
            </Typography>
          </Block>
          <Block />
        </Block>
      </Body>
      <Block
        width={width}
        elevation={10}
        padding={14}
        flexDirection="row"
        variant="white"
        justifyContent={'space-between'}
        alignItems={'center'}>
        <Icon2 name="graduation-cap" size={35} color="cornflowerblue" />
        <Icon3 name="bell" size={35} color="cornflowerblue" />
        <Icon name="user" size={35} color="cornflowerblue" />
        <Icon name="setting" size={35} color="cornflowerblue" />
        <Icon4 name="menu" size={35} color="cornflowerblue" />
      </Block>
    </Container>
  );
}

export default DemoNew;
