import React from 'react';
import Block from 'src/Components/Block/Block';
import Body from 'src/Components/Body/Body';
import Container from 'src/Components/Container/Container';
import Typography from 'src/Components/Typography/Typography';
import Icon from 'react-native-vector-icons/Feather';
import scaler from 'src/Utils/scaler';

function DemoQuestionScreen() {
  return (
    <Container>
      <Body>
        <Typography
          alignSelf={'center'}
          fontWeight={'800'}
          top={20}
          fontSize={23}>
          Questions
        </Typography>

        <Block marginTop={scaler(20)} flexDirection={'row'}>
          {[{}, {}, {}, {}, {}, {}, {}, {}].map((data, index) => {
            {
              return (
                <Block
                  margin={10}
                  elevation={10}
                  width={scaler(50)}
                  variant="white"
                  justifyContent="center"
                  alignItems="center"
                  height={scaler(50)}>
                  <Typography
                    fontWeight={'700'}
                    fontSize={20}>
                    {index + 1}
                  </Typography>
                </Block>
              );
            }
          })}
        </Block>
        <Block
          borderRadius={20}
          height={200}
          backgroundColor={'white'}
          top={70}
          shadowOpacity={0.2}
          margin={5}>
          <Typography fontSize={22} fontWeight={'700'} top={20} left={10}>
            Question :1
          </Typography>
          <Typography fontSize={19} fontWeight={'600'} top={30} left={10}>
            What are the different types of languages that are available in the
            DBMS? & also What are the main differences between Primary key and
            Unique Key?
          </Typography>
        </Block>
        <Block
          borderRadius={20}
          height={200}
          backgroundColor={'white'}
          top={70}
          shadowOpacity={0.2}
          margin={5}>
          <Block top={20} left={20}>
            <Typography fontSize={20}>Choose any one option </Typography>
            <Block flexDirection={'row'}>
              <Icon name="circle" size={20} />
              <Typography> Four</Typography>
            </Block>
            <Block flexDirection={'row'}>
              <Icon name="circle" size={20} />
              <Typography> Three</Typography>
            </Block>
            <Block flexDirection={'row'}>
              <Icon name="circle" size={20} />
              <Typography> Two</Typography>
            </Block>

            <Block flexDirection={'row'}>
              <Icon name="circle" size={20} />
              <Typography> Five</Typography>
            </Block>
          </Block>
        </Block>
        <Block
          borderRadius={20}
          height={200}
          backgroundColor={'white'}
          top={70}
          shadowOpacity={0.2}
          margin={5}>
          <Typography fontSize={22} fontWeight={'700'} top={20} left={10}>
            Question :2
          </Typography>
          <Typography top={20} fontSize={20} left={10}>
            Explain the concept of ACID properties {'\n'}in DBMS?
          </Typography>
        </Block>
      </Body>
    </Container>
  );
}

export default DemoQuestionScreen;
