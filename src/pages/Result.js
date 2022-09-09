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


  return (
    <Wrapper>
    <Header>요정 판별기</Header>
    <Contents>
      {/* <Title>결과 보기</Title> */}
      <Name>당신은 {resultData.name}</Name>
      <LogoImage>
        <img src={resultData.image} alt="결과이미지" width={450} height={450}/>
      </LogoImage>
      <Desc>{resultData.desc}입니다</Desc>
      <Fea>{resultData.fea}</Fea>
      <Button onClick={() => navigate("/")} className="btn-danger"
              style={{
                width: 170,
                fontFamily: "SimKyungha",
                fontSize: 25,
                marginTop: 20,
              }}>테스트 다시하기</Button>
    </Contents>
  </Wrapper>
  )
}

export default Result;

const Wrapper = styled.div`
  background-color:#9E5FE3;
  height:120vh;
  width:100%;
`

const Contents = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  height:100vh;
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

// const Title = styled.div`
//   font-size:30px;
//   margin-top:40px;
//   color:#fff;
// `

const LogoImage = styled.div`
margin-top:10px;
`

const Desc = styled.div`
font-family: "SimKyungha";
font-size:25px;
color:#fff;
`
const Name = styled.div`
font-family: "SimKyungha";
font-size:28px;
margin-top:60px;
color:#fff;
`

const Fea = styled.div`
font-family: "SimKyungha";
font-size:22px;
margin-top:15px;
color:#fff;
width:50%;
white-space:break-spaces;
`

