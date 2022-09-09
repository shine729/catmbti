import React from "react";
import Button from "react-bootstrap/Button";

const {Kakao} = window;

const KakaoShareButton = () => {
  const url = "https://fairymbti.netlify.app/";
  const resultUrl = window.location.href;

  // console.log('ddd',resultUrl,url)

  React.useEffect(() => {
    Kakao.cleanup();
    Kakao.init("5815dd089b8936908819b2139034464f");
    console.log(Kakao.isInitialized());
  },[]);


  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '요정 판별기 결과',
        description: '당신이 요정으로 태어난다면 료스알브입니다',
        imageUrl:
          'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          androidExecutionParams: 'test',
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: "https://fairymbti.netlify.app/",
          },
        },
      ]
    });
  }
  return(
    <Button className="btn-danger" style={{
      width: 170,
      fontFamily: "SimKyungha",
      fontSize: 25,
      marginTop: 20,
      marginLeft: 20,
    }}>카카오톡 공유하기</Button>
  )
}

export default KakaoShareButton;