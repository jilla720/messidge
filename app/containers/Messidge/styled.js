import styled from 'styled-components';

export const Tasks = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  height: 600px;
  min-height: 400px;
  overflow-y: scroll;
  padding: 0 30px;
`;

export const TimePicker = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  min-height: 100vh;
`;

export const BottomBar = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: whitesmoke;
`;
