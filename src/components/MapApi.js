import { useEffect } from "react";
import * as S from "./style";
import markerdata from "../MapData/data";
const { kakao } = window;
function MapApi() {
  //웹 페이즈를 로딩 시켰을때 가장 먼저 뜨는 지도 위치
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(35.241141, 128.899906),
      level: 3,
    };
    //내가 data.js에서 가져온 데이터들을 지도에 마커로 찍은것들
    const map = new kakao.maps.Map(container, options);
    markerdata.markerdata.map(el => {
      const m = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(el.lat, el.lng),
      });
      console.log(el);
      //마커에 인포윈도우 표시
      const content = `<div>${el.title} </div>`;

      const mLabel = new kakao.maps.InfoWindow({
        position: new kakao.maps.LatLng(el.lat, el.lng),
        content: content,
      });
      mLabel.open(map, m);
    });
  }, []);

  return (
    <S.MapBox>
      <S.Map id="map"></S.Map>
    </S.MapBox>
  );
}

export default MapApi;
