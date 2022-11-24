import { useEffect } from "react";
import * as S from "./style";
import markerdata from "../MapData/data";
const { kakao } = window;
function MapApi() {
  //웹 페이즈를 로딩 시켰을때 가장 먼저 뜨는 지도 위치
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(
        /*36.1795543, 128.0756416*/ 35.241141,
        128.899906
      ),
      level: 3,
    };
    //내가 data.js에서 가져온 데이터들을 지도에 마커로 찍은것들
    const map = new kakao.maps.Map(container, options);
    markerdata.markerdata.map(el => {
      const m = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(el.lat, el.lng),
        clickable: true,
      });
      console.log(el);
      //마커에 인포윈도우 내용 //인포윈도우에서 따로 파일 만드는법 몰라서 이렇게 함
      const content = `<div style="width:250px; height: 150px;">
        <div style="width: 250px;height:30px;display:flex; align-items:center; justify-content: center; background-color:black; color:white; font-family: 'Jua', sans-serif;">
          ${el.title}
        </div>
        <div style="display:flex; justify-content: center;  width:250px; position: absolute; bottom:0px; font-family: 'Jua', sans-serif;">자세히보기</div>
        <div style="display:flex;">
        <img src="${el.img}" style="width:60px; height:auto"/> 
        <div style="width:100%; display:flex; justify-content:center;">
        <div style="font-family: 'Jua', sans-serif;">-쓰레기 종류-<br /><div style="display:flex; justify-content:center;">${el.kind}</div></div>
        </div>
        </div>
      </div>`;
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
  }, []);

  return (
    <S.MapBox>
      <S.Map id="map"></S.Map>
    </S.MapBox>
  );
}

export default MapApi;
