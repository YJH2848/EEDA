import * as S from "./style";

function Memo() {
  return (
    <S.Body>
      <S.MemoBox>
        <S.content>EEDA Map Info</S.content>
        <S.Sub>
          EEDA에서 수집한 데이터를 맵 마커로 찍어 어느 지역에 어떠한 쓰레기가
          무단으로 투기되어있는지 알려주는 지도
        </S.Sub>
      </S.MemoBox>
    </S.Body>
  );
}

export default Memo;
