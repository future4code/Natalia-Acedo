import styled from "styled-components";


export const MainWrapper = styled.div`
  min-height: 100vh;
  padding-top: 30px;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperCreatePost = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  margin-bottom: 60px;
  padding: 30px;
  padding-top: 0px;
`;

export const TextLabel = styled.label`
  font-size: 1.2em;
`;

export const InputCreatePost = styled.input`
  border-radius: 5px;
  height: 30px;
  width: 100%;
  margin-bottom: 30px;
  font-size: 1.2em;
`;

export const TextAreaCreatePost = styled.textarea`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 30px;
  font-size: 1.2em;
`;

export const WrapperTitle = styled.div`
  width: 45%;
  display: flex;
  align-items: flex-start;
  padding-left: 15px;
`;

export const WrapperSearch = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  padding-left: 15px;
  justify-content: flex-start;
  font-size: 1.3em;
`
export const InputSearchPost = styled.input`
border-radius: 5px;
height: 30px;
margin-left: 20px;
font-size: 1em;
`;


export const MainWrapperPost = styled.div`
  text-align: center;
  width: 45%;
  margin-bottom: 20px;
  padding-bottom: 15px;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 1fr 8fr;
  grid-template-rows: 4fr 1fr;
`;

export const WrapperVote = styled.div`
  grid-column-start: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WrapperPost = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  font-size: 1.2em;
  text-align: left;
`;

export const WrapperButton = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

export const ImageVote = styled.img`
  height: 30px;
  object-fit: contain;
  cursor: pointer;
`;