import * as S from "./style";
import { Link } from "react-router-dom";

function Header() {
  return (
    <S.Search>
      <S.LOGO>EEDA 쓰레기 지원맵</S.LOGO>
      <S.Menu>
        <Link to="/" style={{ textDecoration: "none" }}>
          <S.Home>홈</S.Home>
        </Link>
        <Link to="/menu" style={{ textDecoration: "none" }}>
          <S.Data>쓰레기 한번에 보기</S.Data>
        </Link>
      </S.Menu>
    </S.Search>
  );
}

export default Header;
