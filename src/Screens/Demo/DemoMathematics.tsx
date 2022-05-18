import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Block from 'src/Components/Block/Block';
import Body from 'src/Components/Body/Body';
import Container from 'src/Components/Container/Container';
import Typography from 'src/Components/Typography/Typography';
import 'react-native-gesture-handler';
import scaler from 'src/Utils/scaler';
import {useWindowDimensions} from 'react-native';

function DemoMathematics() {
  const {width} = useWindowDimensions();
  return (
    <Container>
      <Body>
        <Typography fontSize={25} fontWeight={'800'} alignSelf={'center'}>
          Mathematics
        </Typography>

        <Block
          justifyContent="center"
          flexDirection="row"
          variant="background"
          flex={1}
          flexWrap="wrap">
          {[
            {name: 'Early maths', lesson: '24 Lessons', value: '+12'},
            {name: 'Science', lesson: '14 Lessons', value: '+30'},
            {name: 'Hindi', lesson: '54 Lessons', value: '+22'},
            {name: 'English', lesson: '54 Lessons', value: '+80'},
            {name: 'Biology', lesson: '64 Lessons', value: '+70'},
            {name: 'Social Study', lesson: '64 Lessons', value: '+120'},
            {name: 'Dynamic Programming', lesson: '84 Lessons', value: '+85'},
            {name: 'Data Structure', lesson: '13 Lessons', value: '+86'},
            {name: 'Early maths', lesson: '24 Lessons', value: '+12'},
            {name: 'English', lesson: '54 Lessons', value: '+80'},
            {name: 'Social Study', lesson: '64 Lessons', value: '+120'},
            {name: 'Dynamic Programming', lesson: '84 Lessons', value: '+85'},
            {name: 'Hindi', lesson: '54 Lessons', value: '+22'},
            {name: 'English', lesson: '54 Lessons', value: '+80'},
            {name: 'Hindi', lesson: '54 Lessons', value: '+22'},
            {name: 'English', lesson: '54 Lessons', value: '+80'},
          ].map((data, index) => {
            {
              return (
                <Block
                  padding={scaler(20)}
                  elevation={10}
                  borderRadius={scaler(10)}
                  margin={scaler(5)}
                  variant="white"
                  width={(width - scaler(50)) / 2}>
                  <Typography fontSize={20}  >{data?.name}</Typography>
                  <Typography>{data?.lesson}</Typography>
                  <Block height={scaler(10)} />
                  <Block
                    alignSelf="flex-end"
                    borderWidth={1}
                    backgroundColor={'lightgrey'}
                    justifyContent="center"
                    alignItems="center"
                    height={scaler(50)}
                    width={scaler(50)}
                    borderRadius={scaler(60 / 2)}>
                    <Typography>{data?.value}</Typography>
                  </Block>
                </Block>
              );
            }
          })}
        </Block>
      </Body>
    </Container>
  );
}

export default DemoMathematics;
