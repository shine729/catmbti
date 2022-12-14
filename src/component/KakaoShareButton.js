import React from "react";
import Button from "react-bootstrap/Button";

const {Kakao} = window;

const KakaoShareButton = ({data}) => {
  const url = "https://fairymbti.netlify.app/";
  const resultUrl = window.location.href;

  React.useEffect(() => {
    Kakao.cleanup();
    Kakao.init("fbcb569c85235fe62771cae8a22b523b");
    console.log(Kakao.isInitialized());
  },[]);


  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '요정 판별기 결과',
        description: `당신이 요정으로 태어난다면 ${data.name}입니다`,
        imageUrl:url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl:resultUrl,
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: url,
            webUrl:url,
          },
        },
      ]

    });

  }

  return(
    <Button onClick={shareKakao} className="btn-danger" style={{
      width: 170,
      fontFamily: "SimKyungha",
      fontSize: 23,
      marginTop: 20,
      marginLeft: 20,
      borderColor:'#8A20FA',
      backgroundColor:'#8A20FA'
    }}>카카오톡 공유하기</Button>
  )

}

export default KakaoShareButton;