import { useEffect } from "react";
import * as S from "./style";
import { markerdata } from "../MapData/data";

const { kakao } = window;
function MapApi() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(35.241141, 128.899906),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    markerdata.forEach(el => {
      const m = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(el.lat, el.lng),
      });
      const mLabel = new kakao.maps.InfoWindow({
        position: new kakao.maps.LatLng(el.lat, el.lng),
        content: "언젠간 넣겠지",
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
