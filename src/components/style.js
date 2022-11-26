import styled from "styled-components";

export const Logo = styled.div`
  margin-left: 7vw;
  color: yellow;
  font-family: "Jua", sans-serif;
  font-size: 50px;
  color: white;
`;

export const Img = styled.img`
  margin-right: 7vw;
`;

export const Map = styled.div`
  width: 30vw;
  height: 37vh;
  position: relative;
  left: 1.5%;
  bottom: 16%;
  border: none;
  box-shadow: 20px 20px 20px #000;
`;

export const Menu = styled.div`
  cursor: pointer;
`;

export const MapBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 85vh;
  width: 90%;
`;

export const Input = styled.input`
  width: 30vw;
  height: 4vh;
  border-radius: 20px;
  padding: 5px;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  background-color: lightgreen;
  height: 10vh;
  align-items: center;
`;

export const Mag = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  right: 34vw;
  cursor: pointer;
`;

export const Sign = styled.img`
  width: 630px;
  position: relative;
  left: 37%;
  margin: 0;
  top: 5%;
`;

export const BG = styled.div`
  background-image: url("img/자원.jpg");
  background-repeat: no-repeat;
  height: 90vh;
`;
