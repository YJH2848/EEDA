import styled from "styled-components";

export const Container = styled.div``;

export const LOGO = styled.div`
  font-weight: bold;
  color: white;
  @media screen and (max-width: 800px) {
    margin-left: 2vw;
    font-size: xx-large;
  }
`;

export const Search = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: lightgreen;
  @media screen and (max-width: 800px) {
    justify-content: space-between;
  } ;
`;

export const Sub = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  width: 30vw;
  height: 6vh;
  @media screen and (max-width: 800px) {
    margin-right: 2vw;
    width: 50vw;
  } ;
`;

export const Map = styled.div`
  width: 65vw;
  height: 70vh;
  @media screen and (max-width: 800px) {
    width: 80vw;
    height: 60vh;
  } ;
`;
export const div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  } ;
`;

export const content = styled.div``;
