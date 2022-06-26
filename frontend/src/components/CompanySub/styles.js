import styled from 'styled-components';

export const CompanyForm = styled.div`
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

export const Submit = styled.button`
    height: 60px;
    border-radius: 30px;
    border: none;
    outline: none;
    background-color: #ff6500;
    margin: 2vh;
    padding: 0 4%;
    font-weight: 590;
    color: white;
    transition: 0.1s ease;

    background-image: url("https://assets.website-files.com/611580035ad59b20437eb024/616f998c4fdccc1e0de4e5a1_btn%20background%20(1).png");
    background-position: 50% 50%;
    background-size: cover;

    &:hover {
        font-size: 16.5px;
    }
`;
