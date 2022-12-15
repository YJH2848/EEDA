import { useEffect, useState } from "react";
import * as S from "./style";
import markerdata from "../MapData/data";
import "./Overlay.css";
import Header from "./Header";

const { kakao } = window;

function MapApi() {
  //웹 페이즈를 로딩 시켰을때 가장 먼저 뜨는 지도 위치
  const [search, setSearch] = useState([]);
  const [none, setNone] = useState(false);
  const [lat, setLat] = useState(36.70549620983271);
  const [lng, setLng] = useState(128.1922582067794);
  const [level, setLevel] = useState(13);
  const [look, setLook] = useState(false);
  const [btn, setBtn] = useState("쓰레기 데이터 보기");

  const chg = () => {
    setLook(look => !look);
    setBtn("지도 보기");
    if (look == true) {
      window.location.reload();
    }
  };
  const SearchArea = el => {
    setSearch(el.target.value);
  };
  //나중에 props로 check.js로 옮길 예정
  const keyPress = e => {
    if (e.key === "Enter") {
      markerdata.markerdata.map(el => {
        console.log(search);
        if (el.id == 1) {
          if (search == el.title) {
            setLat(el.lat);
            setLng(el.lng);
            setNone("");
            setLevel(3);
          } else if (search == "") {
            setNone("보고싶은 지역을 입력해주십시요.");
          }
        }

        setSearch("");
      });
    }
  };

  //나중에 props로 check.js로 옮길 예정
  const onClick = () => {
    markerdata.markerdata.map(el => {
      console.log(search);
      if (el.id == 1) {
        if (search == el.title) {
          setLat(el.lat);
          setLng(el.lng);
          setNone("");
          setLevel(3);
        } else if (search == "") {
          setNone("보고싶은 지역을 입력해주십시요.");
        }
      }

      setSearch("");
    });
  };

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      mapTypeId: kakao.maps.MapTypeId.ROADMAP,
      level: `${level}`,
    };
    const map = new kakao.maps.Map(container, options);

    markerdata.markerdata.map(el => {
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
  }, [lat, lng]);
  return (
    <S.Container>
      <Header />
      <S.box>
        <S.Add>
          <S.Input
            onKeyPress={keyPress}
            placeholder="원하는 지역을 입력하세요."
            value={search}
            onChange={SearchArea}
          ></S.Input>
          <S.Button onClick={onClick}>찾기</S.Button>
        </S.Add>
      </S.box>

      <button onClick={chg}>{btn}</button>
      <S.Err>{none}</S.Err>

      <S.div>
        {look ? (
          <div>
            {markerdata.markerdata.map(el => (
              <S.Props>
                <S.F>{el.title}</S.F>
                <S.K>{el.kind}</S.K>
                <br />
              </S.Props>
            ))}
          </div>
        ) : (
          <S.Map id="map"></S.Map>
        )}
      </S.div>
    </S.Container>
  );
}

export default MapApi;
