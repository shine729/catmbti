import React from 'react';
import styled  from 'styled-components';
import {ProgressBar,Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { QuestionData } from '../assets/data/questionData';
import { createSearchParams } from 'react-router-dom';

const Question = () => {

  const [questionNo,setQuestionNo] = React.useState(0);
  const [totalScore,setTotalScore] = React.useState([
    {id:"EI",score : 0},
    {id:"SN",score : 0},
    {id:"TF",score : 0},
    {id:"JP",score : 0},
  ])
  const navigate = useNavigate();

  const handleClickButton = (no , type) => {
    const newScore = totalScore.map((s) => 
      s.id === type ? {id : s.id, score:s.score + no} : s
    );

    setTotalScore(newScore);
    //다음문제로 문제수 증가
    if(QuestionData.length !== questionNo + 1){
      setQuestionNo(questionNo + 1);
    } else{
      //mbti도출
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc + (curr.score >=2 ? curr.id.substring(0,1) : curr.id.substring(1,2)),
          "" //reduce 초기값
        );

      //결과 페이지 이동
      navigate({
        pathname:"/result",
        search:`?${createSearchParams({
          mbti:mbti,
        })}`
      });
    }    
  }


  return (
    <Wrapper>
      <ProgressBar striped variant="danger" now={questionNo / QuestionData.length * 100} />
      <Titlewrap>
        <Title>{QuestionData[questionNo].title}</Title>
        <ButtonGrounp>
          <Button onClick={() => handleClickButton(1 , QuestionData[questionNo].type)} style={{width:'40%', minHeight:'210px', fontSize:'23px'}}>{QuestionData[questionNo].answera}</Button>
          <Button onClick={() => handleClickButton(0 , QuestionData[questionNo].type)}  style={{width:'40%', minHeight:'210px', fontSize:'23px',marginLeft:'20px'}}>{QuestionData[questionNo].answerb}</Button>
        </ButtonGrounp>
      </Titlewrap>
    </Wrapper>
  )
}

export default Question;

const Wrapper = styled.div`
  background-color:#9E5FE3;
  height:100vh;
  width:100%;
`

const Titlewrap = styled.div`
  width:100%;
  position:absolute;
  transform:translate(-50%,-50%);
  left:50%;
  top:50%;
`

const Title = styled.div`
  font-family: "SimKyungha";
  text-align:center;
  font-size:40px;
  color:#fff;
  width:80%;
  margin:0 auto;
  margin-bottom:10px;
  @media screen and (max-width: 992px) {
    font-size:28px;
  }
`

const ButtonGrounp = styled.div`
  font-family: "SimKyungha";
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
`
