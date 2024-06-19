/* global kakao */
// 카카오 객체 정의

import Script from "next/script";

// window 객체에 kakao 프로퍼티 추가 선언 (TS)
declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  // 카카오 지도 로드 함수 (지도 옵션 설정)
  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.57067),
        level: 3,
      };

      new window.kakao.maps.Map(mapContainer, mapOption);
    });
  };

  return (
    <>
      {/* <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 넣으시면 됩니다."></script> */}

      {/* Next.js Script 태그로 카카오 지도 로드하기 */}
      <Script
        type="text/javascript"
        strategy="afterInteractive"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
        onReady={loadKakaoMap}
      />
      {/* 카카오 지도가 그려질 id="map"영역 생성 */}
      <div id="map" className="w-full h-screen" />
    </>
  );
};

export default Map;
