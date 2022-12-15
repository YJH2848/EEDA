import styled from "styled-components";

export const Container = styled.div``;

export const LOGO = styled.div`
  font-weight: bold;
  color: white;
  font-size: 2vw;
  @media screen and (max-width: 800px) {
    margin-left: 2vw;
    font-size: 4vw;
  }
`;

export const Add = styled.div`
  display: flex;
`;
export const Sub = styled.div`
  width: 100%;
`;

export const box = styled.div`
  display: flex;
  justify-content: center;
  height: 10vh;
  align-items: center;
`;

export const Input = styled.input`
  width: 30vw;
  height: 5vh;
  @media screen and (max-width: 800px) {
    width: 50vw;
    ::placeholder {
      font-size: 80%;
    }
  }
`;
export const Err = styled.div`
  display: flex;
  justify-content: center;
  color: red;
  @media screen and (max-width: 800px) {
  }
`;
export const Button = styled.button`
  height: 5.8vh;
  width: 4vw;
  @media screen and (max-width: 900px) {
    width: 15vw;
    height: 5.9vh;
  }
`;
export const Search = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: gray;
`;

export const Map = styled.div`
  width: 65vw;
  height: 70vh;
  @media screen and (max-width: 800px) {
    width: 90vw;
    height: 40vh;
  } ;
`;
export const div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  justify-content: space-around;
  @media screen and (max-width: 800px) {
    height: 60vh;
  }
`;

export const content = styled.div``;

export const Table = styled.table`
  margin: 100px;
  border: 1px solid black;
  border-collapse: collapse;
`;

export const Th = styled.th`
  border: 1px solid black;
`;

export const Td = styled.td`
  border: 1px solid black;
`;

export const Data = styled.div`
  color: white;
  cursor: pointer;
  &:hover {
    color: lightgray;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
  @media screen and (max-width: 800px) {
    font-size: 50%;
  }
`;

export const Home = styled.div`
  color: white;
  cursor: pointer;
  &:hover {
    color: lightgray;
  }
`;

export const Find = styled.div``;

export const Express = styled.button`
  height: 5vh;
  width: 10vw;
`;

export const Props = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid blue;
  width: 70vw;
  margin-left: 200px;
`;

export const F = styled.div``;

export const K = styled.div``;
