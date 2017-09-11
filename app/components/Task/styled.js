import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 300px;
  width: 250px;
  align-items: center;
  overflow: hidden;
`;

export const Card = styled.div`
  padding: 15px;
  background-color: whitesmoke;
  border-radius: 10px,
  margin: 15px;
  width: 200px;
  min-height: 200px;
  position: relative;

  > h2 {
    user-select: none;
  }

`;

export const TextBox = styled.div`
  width: 100%;
  outline: none;
  cursor: text;
`;
