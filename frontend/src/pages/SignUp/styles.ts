import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 800px) 1fr;
  justify-content: center;
  align-content: center;

  width: 100vw;
  height: 100vh;

  overflow: hidden;
`;

export const Banner = styled.div`
  height: 100vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 80px;

  padding: 0 100px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 25px;

  max-width: 485px;
  width: 100%;

  input {
    height: 50px;
    max-width: 485px;
    width: 100%;

    padding: 15px;

    border-radius: 10px;
    border: 1px solid ${(props) => props.theme["gray--600"]};

    background: ${(props) => props.theme["gray--600"]};
    color: ${(props) => props.theme.white};

    font-size: 18px;
    font-weight: 300;
    line-height: 60.688%;
  }

  p {
    color: ${(props) => props.theme["gray--100"]};
    font-size: 20px;
    font-weight: 400;
    line-height: 60.688%;
    margin-bottom: 10px;
  }
`;

export const InputButton = styled.button`
  color: ${(props) => props.theme.white};

  text-align: center;
  font-size: 26px;
  font-style: normal;
  line-height: 60.688%;

  height: 60px;
  max-width: 485px;
  width: 100%;

  margin-top: 15px;
  cursor: pointer;

  border: none;
  border-radius: 10px;

  background-color: ${(props) => props.theme["green--700"]};

  &:hover {
    background: ${(props) => props.theme["green--500"]};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    color: ${(props) => props.theme["gray--300"]};

    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 60.688%;
    text-decoration-line: underline;

    margin-top: 10px;

    &:hover {
      color: ${(props) => props.theme["gray--100"]};
    }
  }
`;

export const UsernameInput = styled.div``;
export const PasswordInput = styled.div``;
export const NamesInput = styled.div``;

export const NameInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
