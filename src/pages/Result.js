import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/resultData";
// import { ButtonGroup } from 'react-bootstrap';
import KakaoShareButton from '../component/KakaoShareButton';
import Fairy2 from '../assets/images/fairy2.png';

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
    <Header><img alt="요정사진" src={Fairy2} width={50} height={50}/>요정 판별기<img alt="요정사진" src={Fairy2} width={50} height={50}/></Header>
    <Contents>
    <Name>당신은 {resultData.name}입니다</Name>
      {/* <Title>결과 보기</Title> */}
      <LogoImage>
        <img src={resultData.image} alt="결과이미지" width={350} height={350}/>
      </LogoImage>
      <Desc>{resultData.desc}입니다</Desc>
      <Fea>{resultData.fea}</Fea>
      <Char>{resultData.char}</Char>
      <Sick>{resultData.sick}</Sick>
      <Buttongroup>
        <Button onClick={() => navigate("/")} className="btn-danger"
                style={{
                  width: 170,
                  fontFamily: "SimKyungha",
                  fontSize: 23,
                  marginTop: 20,
                  borderColor:'#8A20FA',
                  backgroundColor:'#8A20FA'
                }}>테스트 다시하기</Button>
                {/* <KakaoShareButton data={resultData}/> */}
      </Buttongroup>
    </Contents>
  </Wrapper>
  )
}

export default Result;

const Wrapper = styled.div`
  background-color:#9E5FE3;
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

// const Title = styled.div`
//   font-size:30px;
//   margin-top:40px;
//   color:#fff;
// `

const LogoImage = styled.div`
margin-top:0;
`

const Desc = styled.div`
font-family: "SimKyungha";
font-size:30px;
color:#fff;
width:30%;
margin:0 auto;
white-space:break-spaces;
text-align:center;
@media screen and (max-width: 992px) {
  font-size:23px;
  width:90%;
}
`
const Name = styled.div`
font-family: "SimKyungha";
font-size:30px;
margin-top:30px;
color:#fff;
@media screen and (max-width: 992px) {
  margin-top:10px;
  font-size:26px;
}
`

const Fea = styled.div`
font-family: "NanumSquareRoundR";
font-size:15px;
margin-top:15px;
color:#fff;
width:30%;
white-space:break-spaces;
@media screen and (max-width: 992px) {
  width:90%;
  font-size:14px;
}
`

const Char = styled.div`
font-family: "NanumSquareRoundR";
font-size:16px;
margin-top:15px;
color:#fff;
width:30%;
white-space:pre-wrap;
@media screen and (max-width: 992px) {
  width:90%;
  font-size:15px;
}
`

const Sick = styled.div`
font-family: "NanumSquareRoundR";
font-size:16px;
margin-top:15px;
color:#fff;
width:30%;
white-space:pre-wrap;
@media screen and (max-width: 992px) {
  width:90%;
  font-size:15px;
}
`

const Buttongroup = styled.div`
  display:flex;
  flex-directon:row;
  margin-bottom: 30px;
  @media screen and (max-width: 992px) {
    width:90%;
  }
`



