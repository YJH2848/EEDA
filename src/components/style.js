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
  right: 5%;
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
  width: 32vw;
  position: relative;
  left: 30%;
  margin: 0;
  top: 7%;
  object-fit: cover;
`;

export const BG = styled.div`
  background-image: url("img/자원.jpg");
  background-repeat: no-repeat;
  height: 89vh;
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
  border-radius: 10px;
`;

export const Body = styled.div`
  display: flex;
`;

export const Sub = styled.div`
  display: flex;
  align-items: center;
  height: 80%;
  width: 80%;
  justify-content: center;
  margin-left: 10%;
  font-family: "Jua", sans-serif;
  font-size: 30px;
`;