import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import '../App.css';

import {ReactComponent as SH_GRADE} from '../rankicons/SH.svg';
import {ReactComponent as SS_GRADE} from '../rankicons/SS.svg';
import {ReactComponent as S_GRADE} from '../rankicons/S.svg';
import {ReactComponent as A_GRADE} from '../rankicons/A.svg';
import {ReactComponent as B_GRADE} from '../rankicons/B.svg';
import {ReactComponent as C_GRADE} from '../rankicons/C.svg';
import {ReactComponent as D_GRADE} from '../rankicons/D.svg';

const GRADE_ICONS = {
  SH: SH_GRADE,
  SS: SS_GRADE,
  S: S_GRADE,
  A: A_GRADE,
  B: B_GRADE,
  C: C_GRADE,
  D: D_GRADE,
}

const ScoreElement = styled.div`
  position: relative;
  margin: 1%;
  width: 98%;
  height: 8vh;
  background: url(https://assets.ppy.sh/beatmaps/781509/covers/slimcover.jpg?1622139880);
  background-size: cover;
  background-position: center;
  /*background-color: rgba(0,0,0,0.4);
  background-blend-mode: darken;*/
  box-shadow: 0 1px 3px rgba(0,0,0,.25);
  border-radius: 10px;
  display: flex;
`

const Shape = styled.div({
  width: '15%',
  background: 'rgb(36,34,42)',
  opacity: '0.95',
  
});
/*
'::before': {
    content: "''",
    width: '2%',
    right: '13%',
    'clip-path': 'polygon(0 0,100% 50%,0 100%)',
    background: 'rgb(48,46,56)',
    opacity: '0.95',
    height: '100%',
    position: 'absolute',
  }
  */

const Data = styled.div`

  height: 100%;
  background: rgb(48,46,56);
  opacity: 0.95;
  width: 100%;
`

function Score({ data }) {

  const BeatmapThumbnail = {

  }


  return (
    <ScoreElement style={{ background: `url(${data.cover})`}}>
      <Data>
      </Data>
      <Shape />
    </ScoreElement>
  );
}

export default Score;
