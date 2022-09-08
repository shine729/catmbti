import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";

  const Result = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const mbti = searchParams.get("mbti");
    const [resultData, setResultData] = React.useState({});


  React.useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti] );

  console.log(resultData);

  return (
    <Wrapper>
    <Header>요정 판별기</Header>
    <Contents>
      <Title>결과 보기</Title>
      <LogoImage>
        <img src={resultData.image} alt="" className="rounded-circle" width={350} height={350}/>
      </LogoImage>
      <Desc>당신은 {resultData.name}입니다</Desc>
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

