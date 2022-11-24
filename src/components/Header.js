import * as S from "./style";

function Header() {
  return (
    <div>
      <S.SearchBar>
        <S.Logo>Logo</S.Logo>
        <S.Input></S.Input>
        <S.Menu>
          <S.Img src="/img/Menu.png" width="40px" height="40px"></S.Img>
        </S.Menu>
      </S.SearchBar>
    </div>
  );
}

export default Header;
