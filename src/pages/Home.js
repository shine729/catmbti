import React from 'react';
import styled  from 'styled-components';//css사용시 필요함
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';//페이지이동
import Fairy from '../assets/images/fairy.png';

const Home = () =>{
  const Navigate = useNavigate();
  const handleClickButton = () => {
    Navigate('/question');
  }
  return (
    <Wrapper>
      <Header>요정 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img alt="요정사진" src={Fairy} width={350} height={350}/>
        </LogoImage>
        <Desc>MBTI를 기반으로하는 요정테스트</Desc>
        <Desc2>요정으로 태어나면 당신은 어떤요정일까?</Desc2>
        <Button onClick={handleClickButton} className="btn-danger"
            style={{
              fontFamily: "SimKyungha",
              fontSize: 25,
              marginTop: 20,
              marginBottom: 20,
            }}>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  )
}

export default Home;
const Wrapper = styled.div`
  background-color:#9E5FE3;
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
  font-family: "SimKyungha";
  font-size:45px;
  height:10vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background:#8A20FA;
  color:#fff;
`

const Title = styled.div`
  font-family: "SimKyungha";
  font-size:30px;
  margin-top:40px;
`

const LogoImage = styled.div`
margin-top:10px;
`

const Desc = styled.div`
font-family: "SimKyungha";
font-size:28px;
margin-top:20px;
`

const Desc2 = styled.div`
font-family: "SimKyungha";
font-size:28px;
`