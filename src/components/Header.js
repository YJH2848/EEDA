import * as S from "./style";

function Header() {
  return (
    <div>
      <S.SearchBar>
        <div>Logo</div>
        <S.Input></S.Input>
        <div>Menu</div>
      </S.SearchBar>
    </div>
  );
}

export default Header;
