import styled from "styled-components";

export const Container = styled.div``;

export const LOGO = styled.div`
  font-weight: bold;
  color: white;
  font-size: 2vw;
  @media screen and (max-width: 800px) {
    margin-left: 2vw;
    font-size: 6vw;
  }
`;

export const Sub = styled.div`
  width: 100%;
`;

export const box = styled.div`
  display: flex;
  justify-content: center;
  height: 10vh;
  align-items: center;
  @media screen and (max-width: 800px) {
    position: relative;
    top: 10vh;
  }
`;

export const Input = styled.input`
  width: 30vw;
  height: 5vh;
  @media screen and (max-width: 800px) {
    width: 50vw;
  }
`;
export const Err = styled.div`
  display: flex;
  justify-content: center;
  color: red;
`;
export const Button = styled.button``;
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

  @media screen and (max-width: 800px) {
    flex-direction: column;
  } ;
`;

export const content = styled.div``;
