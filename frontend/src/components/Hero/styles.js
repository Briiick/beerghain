import styled from 'styled-components';

export const CompanyForm = styled.form`
  padding: 8%;
  border-radius: 15px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 00px 40px 0.1px rgb(255,133, 30, 0.5);

  h4 {
      font-weight: 600;

  }
`;

export const TextInput = styled.input`
    height: 60px;
    width: 60%;
    border-radius: 40px;
    border: 1px solid rgb(205,133, 30, 0.3);
    padding: 0 5%;
    margin: 1.5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Submit = styled.button`
    height: 60px;
    border-radius: 40px;
    border: 1px solid rgb(255,133, 30, 0.3);
    background-color: #ff6500;
    margin: 2vh;
    padding: 0 5%;
    font-weight: 590;
    color: white;
    transition: 0.3s ease;

    &:hover {
        background-color: #0c1d37;
    }
`;