import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Border = styled.div`
  box-shadow: 0 25px 50px -10px rgba(100, 44, 0, 0.07);
  background-color: white;
  border-radius: 24px;
  min-width: 640px;
  max-width: 60vw;
  padding: 3%;
  padding-bottom: 1%;
  display: flex;
  flex-direction: column;
  margin: 1%;
  font-size: 15px;

  @media (max-width: 760px) {
    min-width: 90vw;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding-right: 5%;
    padding-left: 5%;
    min-width: 95vw;
  }
`;

export const Header = styled.div`
  flex: 1;
  min-height: 40px;
  border-bottom: 2px solid #e9e5d9;
  display: flex;
`;

export const Heading = styled.div`
  flex: 1;
  font-weight: 550;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const InnerCell = styled.div`
  flex: 1;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #606c7e;
  text-align: center;
`;

export const Stage = styled.button`
  // flex: 1;
  display: flex;
  align-items: center;
  height: 80%;
  font-weight: 400;
  width: 60%;
  border-radius: 10px;
  text-align: center;
  padding: 4% 10%;
  white-space: nowrap;
  background-color: #fae6e6;
  border: none;

  &:hover {
    background-color: #ffc7c7;
  }

  @media (max-width: 760px) {
    font-size: 13px;
  }

  @media (max-width: 540px) {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Cell = styled.div`
  flex: 1;
  min-height: 60px;
  margin: 5px;
  border-radius: 5px;
  display: flex;

  &:hover {
    background-color: ${props => !props.last && "#fdf8f3"};
  }
`;

export const Arrow = styled.div`
    cursor: ${props => !props.disabled && "pointer"};
    opacity: ${props => props.disabled && "0.5"};
    margin-bottom: 1px;

    &:hover {
        color: ${props => !props.disabled && "#ff6500"};
    }
`;