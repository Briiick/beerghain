import styled from 'styled-components';

export const CompanyForm = styled.form`
  padding: 4% 1%;
  width: 50%;
  border-radius: 15px;
  background-color: rgb(10,8,16, 0.1);
  display: flex;
  outline: 1px solid #1c161f;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 00px 15px 0.1px rgb(255,133, 30, 0.5);

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
    color: white;
    background-color: transparent;
    box-shadow: 0px 00px 2px 0.1px rgb(255,133, 30, 0.5);
`;

export const Submit = styled.button`
    height: 60px;
    border-radius: 30px;
    border: none;
    outline: none;
    background-color: #ff6500;
    margin: 2vh;
    padding: 0 6%;
    font-weight: 590;
    color: black;
    transition: 0.1s ease;

    background-image: url("https://assets.website-files.com/611580035ad59b20437eb024/616f998c4fdccc1e0de4e5a1_btn%20background%20(1).png");
    background-position: 50% 50%;
    background-size: cover;

    &:hover {
        font-size: 16.5px;
    }
`;

export const StreamingButton = styled.div`
    padding: 12%;
    margin: 2vh 0;
    background-color: ${props => props.streaming ? "rgb(0,200,0, 0.2)" : "rgb(200,0,0, 0.2)"};
    // background-image: url("https://assets.website-files.com/611580035ad59b20437eb024/616f998c4fdccc1e0de4e5a1_btn%20background%20(1).png");
    // background-position: 50% 50%;
    // background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: white;
    font-size: 14px;
    outline: 1px solid ${props => props.streaming ? "rgb(0,200,0, 0.5)" : "rgb(240,0,0, 0.5)"};
    white-space: nowrap;
    transition: 0.3 ease;
`;

export const Headings = styled.div`
    margin: 2vh 6vw;
    flex: 1;

    h3 {
        font-size: 20px;
        font-weight: 700;
        white-space: nowrap;
        color: white;
    }
    h5 {
        // color: white;
        font-size: 30px;
        font-weight: 600;
        background: -webkit-linear-gradient(60deg, #fe9144, #88119b);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const ProfileWrap = styled.div`
    display: flex;
    width: fit-content;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 4%;
    padding-bottom: 4%;
    background-color: #0a0810;
    outline: 2px solid #1c161f;
    border-radius: 20px;
`;

export const ConnectButton = styled.button`
    display: flex;
    width: fit-content;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 4%;
    padding-bottom: 4%;
    background-color: #0a0810;
    outline: 2px solid #1c161f;
    border-radius: 20px;
`;