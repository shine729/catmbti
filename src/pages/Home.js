import React from 'react';
import styled  from 'styled-components';
import PangImage  from '../assets/cats.jpg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';//페이지이동

const Home = () =>{
  const Navigate = useNavigate();
  const handleClickButton = () => {
    Navigate('/question');
  }
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img src={PangImage} className="rounded-circle" width={350} height={350}/>
        </LogoImage>
        <Desc>MBTI를 기반으로하는 나랑 잘맞는 고양이</Desc>
        <Button onClick={handleClickButton}>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  )
}

export default Home;
const Wrapper = styled.div`
  background-color:pink;
  height:100vh;
  width:100%;
`

const Contents = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`

const Header = styled.div`
  font-size:40px;
  display:flex;
  justify-content:center;
  align-items:center;
`

const Title = styled.div`
  font-size:30px;
  margin-top:40px;
`

const LogoImage = styled.div`
margin-top:10px;
`

const Desc = styled.div`
font-size:20px;
margin-top:20px;
`