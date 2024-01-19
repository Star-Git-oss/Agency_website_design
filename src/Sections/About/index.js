// This is About component, It will contain about us info.

import wave from '../../assets/waves.svg';
import hand from '../../assets/hand.svg';
import styled, { keyframes } from 'styled-components';
import rocket from '../../assets/rocket image.png';
import human from "../../assets/human.svg";


const move = keyframes`
0%{ transform:translateY(-5px) }
50%{ transform:translateY(10px) translateX(10px) }
100%{ transform:translateY(-5px) }
`;


const AboutSection = styled.div`
width: 100vw;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Waves = styled.img`
width: 100%;
position: absolute;
top: -1rem;

`;
const Hand = styled.div`
position: absolute;
bottom: -1rem;
right: 0;


@media only Screen and (max-width: 40em) {
  display: none;
}
`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only Screen and (max-width: 64em) {
    
    margin: 3rem calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;
const Title = styled.h1`
display: inline-block;
font-size: 2rem;
`;
const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: 5px solid var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only Screen and (max-width: 40em) {
  flex-direction: column;
  }
`;
const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;

  @media only Screen and (max-width: 40em) {
   width: 50vw;
   padding-bottom: 0;

  }
`;
const AboutText = styled.div`
  position: relative;
  width: 50%;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;
const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;
  @media only Screen and (max-width: 40em) {
   display: none;
  }
`;
const Text = styled.h4`
font-size:calc(0.5rem + 1vw ) ;
line-height: 1.5;
color: var(--nav2);
`;
const Circle = styled.span`
display: inline-block;
width: 1rem;
height: 1rem;
border-radius: 50%;
background-color: var(--black);
margin-right: 0.5rem;
margin-top: 1rem ;
`;


const About = () => {
  return (
    <AboutSection id='about'>
      <Waves src={wave} alt="waves" width="400" height="400" />
      <Hand>
        <img src={hand} alt="Hand" width="400" height="400" />
      </Hand>
      <Main>
        <div>
          <Title>About Us</Title>
          <CurvedLine />
        </div>
        <Content>
          <Rocket>
            <img src={rocket} alt="Hand" width="400" height="400" />
          </Rocket>
          <AboutText>
            <Human>
              <img src={human} alt="Hand" width="400" height="400" />
            </Human>
            <Text>
              We help our customers to tell about themselves, to grow and stand
              out in an increasingly competitive
            </Text>
            <div>
              <Circle style={{ backgroundColor: "var(--purple)" }} />
              <Circle style={{ backgroundColor: "var(--pink)" }} />
              <Circle style={{ backgroundColor: "var(--black)" }} />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
