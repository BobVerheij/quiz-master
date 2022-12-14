import styled from "styled-components";

export const HomeScreen = styled.div<{ bgColor?: string; fullWidth?: boolean }>`
  * {
    font-family: "Connection";
  }
  display: flex;
  gap: 1rem;
  flex-flow: column nowrap;
  align-items: center;
  width: clamp(300px, 100%, 600px);
  ${({ fullWidth }) => fullWidth && "width: 100%"};
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
  height: 100%;

  padding-bottom: 20rem;

  background-color: ${({ bgColor }) => bgColor || "blanchedalmond"};

  transition: background-color 1s ease-in;

  text-align: center;

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  a,
  span {
    margin: 0;
    padding: 0;
  }
`;
