import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import '../App.css';

import XH_GRADE from '../rankicons/XH.svg';
import SH_GRADE from '../rankicons/SH.svg';
import SS_GRADE from '../rankicons/SS.svg';
import S_GRADE from '../rankicons/S.svg';
import A_GRADE from '../rankicons/A.svg';
import B_GRADE from '../rankicons/B.svg';
import C_GRADE from '../rankicons/C.svg';
import D_GRADE from '../rankicons/D.svg';

const GRADE_ICONS = {
  XH: XH_GRADE,
  SH: SH_GRADE,
  SS: SS_GRADE,
  S: S_GRADE,
  A: A_GRADE,
  B: B_GRADE,
  C: C_GRADE,
  D: D_GRADE,
}

const ScoreElement = styled.div({
  position: 'relative',
  margin: '1%',
  width: '98%',
  height: '8vh',
  background: 'url(https://assets.ppy.sh/beatmaps/781509/covers/slimcover.jpg?1622139880)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  /*background-color: rgba(0,0,0,0.4);
  background-blend-mode: darken;*/
  boxShadow: '0 1px 3px rgba(0,0,0,.25)',
  borderRadius: '10px',
  display: 'flex'
});

const Shape = styled.div({
  width: '20%',
  background: 'rgb(36,34,42)',
  opacity: '0.95',
  color: '#ff66a8',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center'
});

const ContentWrapper = styled.div({
  height: '100%',
  background: 'rgb(48,46,56)',
  opacity: '0.95',
  width: '100%',
  display: 'flex'
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

const Data = styled.div({
  height: '100%',
  background: 'rgb(48,46,56)',
  opacity: '0.95',
  width: '80%',
  display: 'flex',
  alignItems: 'center'
});

const TitleBox = styled.div({
  textAlign: 'left',
});

const MapVersion = styled.span({
  color: '#e7a208',
  fontSize: '1.2vh'
});

function Score({ data }) {

  const BeatmapThumbnail = {
    
  }

  const TitleStyle = {
    color: 'white'
  }

  const RankIconStyle = {
    height: '50%',
    padding: '2vh',
  }

  console.log(data);


  return (
    <ScoreElement style={{ background: `url(${data.cover})`}}>
      <ContentWrapper>
        <img style={RankIconStyle} src={GRADE_ICONS[data.rank]}/>
        <Data>
          <TitleBox>
            <span style={TitleStyle}>{data.title}</span>
            <br />
            <MapVersion>{data.version}</MapVersion>
          </TitleBox>
        </Data>
        <Shape>
          {data.pp}PP
        </Shape>
      </ContentWrapper>
    </ScoreElement>
  );
}

export default Score;
