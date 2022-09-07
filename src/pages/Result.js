import React from 'react';
import styled  from 'styled-components'; //css사용시 필요함
import PangImage  from '../assets/cats.jpg';
import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate } from 'react-router-dom'; //페이지이동
import { ResultData } from '../assets/data/resultData';

const Result = () =>{
  const navigate = useNavigate();
  return (
    <Wrapper>
    <Header>예비집사 판별기</Header>
    <Contents>
      <Title>결과 보기</Title>
      <LogoImage>
        <img src={PangImage} className="rounded-circle" width={350} height={350}/>
      </LogoImage>
      <Desc>당신의 요정은 산타요정입니다.</Desc>
      <Button onClick={() => navigate("/")}>테스트 다시하기</Button>
    </Contents>
  </Wrapper>
  )
}

export default Result;

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

