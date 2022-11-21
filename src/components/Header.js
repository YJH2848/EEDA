import * as S from "./style";

function Header() {
  return (
    <div>
      <S.SearchBar>
        <div>Logo</div>
        <S.Input></S.Input>
        <S.Menu>
          <img src="/img/Menu.png" width="40px" height="40px"></img>
        </S.Menu>
      </S.SearchBar>
    </div>
  );
}

export default Header;
