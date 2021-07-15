import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Score from './Score'
import '../App.css';

const ListContainer = styled.div`
  position: relative;
  max-width: 100vh;
  min-width: 20vh;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
`

function ScoresList() {

  return (
    <ListContainer>
      <Score />
      <Score />
      <Score />
      <Score />
      <Score />
      <Score />
      <Score />
      <Score />
      <Score />
      <Score />
      <Score />

    </ListContainer>
  );
}

export default ScoresList;
