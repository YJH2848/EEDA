import { useEffect } from "react";
import * as S from "./style";
import markerdata from "../MapData/data";
import "./MapCss.css";

const { kakao } = window;
function MapApi() {
  //웹 페이즈를 로딩 시켰을때 가장 먼저 뜨는 지도 위치
  useEffect(() => {
    const container = document.getElementById("map");

    const options = {
      center: new kakao.maps.LatLng(35.224508, 129.092587),
      mapTypeId: kakao.maps.MapTypeId.ROADMAP,
      level: 3,
    };

    //내가 data.js에서 가져온 데이터들을 지도에 마커로 찍은것들

    // 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다

    const map = new kakao.maps.Map(container, options);
    markerdata.markerdata.map((el) => {
      const m = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(el.lat, el.lng),
      });

      //마커에 인포윈도우 내용 //인포윈도우에서 따로 파일 만드는법 몰라서 이렇게 함

      const content = `
<div class="overlay_info">
<div class="title">
<a><strong>${el.title}</strong></a>
</div>
<div class="box">
<img src="${el.img}"class="img">
<div class="kind">
<span class="address">쓰레기 종류 : ${el.kind}<div class="footer">
<buttonx>자세히 보기</button>
</div></span>
</div>

</div>

</div>
`;
      //인포윈도우 닫기
      const remove = true;
      const mLabel = new kakao.maps.InfoWindow({
        position: new kakao.maps.LatLng(el.lat, el.lng),
        content: content,
        removable: remove,
      });
      //마커를 클릭했을 때 이벤트
      kakao.maps.event.addListener(m, "click", function () {
        // 마커 위에 인포윈도우를 표시합니다
        mLabel.open(map, m);
      });
    });
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    console.log("랜더링되었습니다");
  }, []);

  return (
    <S.Container>
      <S.Search>
        <S.LOGO>EEDA 쓰레기 정보 Map</S.LOGO>
      </S.Search>
      <S.box>
        <S.Input></S.Input>
      </S.box>
      <S.div>
        <S.Map id="map"></S.Map>
      </S.div>
    </S.Container>
  );
}

export default MapApi;
