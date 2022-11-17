import { useEffect } from "react";
import * as S from "./style";

const { kakao } = window;
function MapApi() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return <S.Map id="map"></S.Map>;
}

export default MapApi;
