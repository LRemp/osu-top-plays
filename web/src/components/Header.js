import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {ReactComponent as OsuLogo} from '../osu_logo.svg';
import '../App.css';

const HeaderDiv = styled.div`
  position: relative;
  height: 7vh;
  background: rgb(86,57,172);
`

const HeaderContainer = styled.div`
  position: relative;
  float: left;
  margin-left: 20%;
  height: 100%;
`

function Header() {
  const logoStyle = {
    position: 'relative',
    height: '80%',
    top: '50%',
    transform: 'translateY(-50%)',
  }

  const headerTextStyle = {
    position: 'relative',
    fontFamily: 'Osu',
    color: 'white',
    marginLeft: '1vh',
  }

  return (
    <HeaderDiv>
      <HeaderContainer>
        <OsuLogo style={logoStyle}/>
        <span style={headerTextStyle}>Osu top plays</span>
      </HeaderContainer>
    </HeaderDiv>
  );
}

export default Header;
