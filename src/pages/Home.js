import React from 'react';
import styled  from 'styled-components';//css사용시 필요함
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';//페이지이동
import Fairy from '../assets/images/fairy.png';
import Fairy2 from '../assets/images/fairy2.png';

const Home = () =>{
  const Navigate = useNavigate();
  const handleClickButton = () => {
    Navigate('/question');
  }
  return (
    <Wrapper>
      <Header><img alt="요정사진" src={Fairy2} width={50} height={50}/>요정 판별기<img alt="요정사진" src={Fairy2} width={50} height={50}/></Header>
      <Contents>
        <Title>요정으로 태어난다면 당신은 어떤요정일까?</Title>
        <LogoImage>
          <img alt="요정사진" src={Fairy} width={350} height={350}/>
        </LogoImage>
        <Desc>MBTI를 기반으로하는 요정테스트</Desc>
        <Desc2>내 성향에 맞는 요정은?</Desc2>
        <Button onClick={handleClickButton} className="btn-danger"
            style={{
              fontFamily: "SimKyungha",
              fontSize: 23,
              marginTop: 20,
              marginBottom: 20,
              backgroundColor:'#8A20FA',
              borderColor:'#8A20FA'
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
  @media screen and (max-width: 992px) {
    height:60px;
    font-size:40px;
  }
`

const Title = styled.div`
  font-family: "SimKyungha";
  font-size:30px;
  margin-top:40px;
  color:#fff;
  @media screen and (max-width: 992px) {
    margin-top:15px;
    font-size:25px;
  }
`

const LogoImage = styled.div`
margin-top:10px;
`

const Desc = styled.div`
font-family: "SimKyungha";
font-size:28px;
margin-top:20px;
color:#fff;
  @media screen and (max-width: 992px) {
    font-size:25px;
    margin-top:0;
  }
`

const Desc2 = styled.div`
font-family: "SimKyungha";
font-size:28px;
color:#fff;
  @media screen and (max-width: 992px) {
    font-size:25px;
  }
`