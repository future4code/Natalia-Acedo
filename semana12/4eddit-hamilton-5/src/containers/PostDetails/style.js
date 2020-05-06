import styled from "styled-components";

export const MainWrapper = styled.div`
  min-height: 100vh;
  padding-top: 30px;
  background-color: #D9D9D9;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const MainWrapperComments = styled.div` 
  text-align: center;
  width: 45%;
  margin-bottom: 20px;
  padding: 15px;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 1fr 8fr;
`

export const WrapperPost = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  margin-bottom: 60px;
  padding: 20px;
  padding-top: 0;
`
export const PostDescription = styled.p`
  font-size: 1.2em;
`

export const WrapperCreateComment = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
  width: 100%;
  margin-top: 20px;
`
export const WrapperSubmitComment = styled.div`
  display: flex;
`

export const TextAreaCreateComment = styled.textarea`
  border-radius: 5px;
  width: 80%;
  margin-right: 10px;
  font-size: 1em;
`

export const WrapperComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: 1.2em;
`

export const ImageVote = styled.img`
  height: 30px;
  object-fit: contain;
  cursor: pointer;
`