import * as S from "./style";

function Header() {
  return (
    <div>
      <S.SearchBar>
        <S.Logo>EEDA</S.Logo>
        <S.Input></S.Input>
        <S.Mag src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"></S.Mag>
      </S.SearchBar>
    </div>
  );
}

export default Header;
