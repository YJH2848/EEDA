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
  width: 33vw;
  height: 38vh;
  position: relative;
  right: 2%;
  bottom: 17%;
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
  border-width: 0px 0px 5px 0px;
  border-style: solid;
  border-color: green;
`;

export const Mag = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  right: 34vw;
  cursor: pointer;
`;

export const Sign = styled.img`
  width: 40%;
  position: relative;
  left: 37%;
  margin: 0;
  top: 5%;
`;

export const BG = styled.div`
  background-image: url("img/자원.jpg");
  background-repeat: no-repeat;
  height: 89.5vh;
  width: 100%;
  background-size: cover;
`;
export const MemoBox = styled.div`
  background-color: #e0e094;
  position: absolute;
  bottom: 40%;
  left: 10%;
  width: 40vw;
  height: 40vh;
`;

export const content = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Jua", sans-serif;
  font-size: 30px;
  background-color: white;
  border: 2px solid black;
`;

export const triangle = styled.div`
  width: 0px;
  height: 0px;
  border-left: 360px solid #666666;
  border-top: 180px solid transparent;
  border-bottom: 180px solid transparent;
`;

export const Body = styled.div`
  display: flex;
`;
