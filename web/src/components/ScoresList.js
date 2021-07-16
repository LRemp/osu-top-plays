import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    fetchBeatmaps()
  }, [])

  const [response, updateResponse] = useState("none");
  const [beatmaps, updateBeatmaps] = useState([]);

  const fetchBeatmaps = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    };

    fetch('/getBeatmaps', requestOptions)
      .then(data => data.json())
      .then(res => updateBeatmaps(res));
  }

  return (
    <ListContainer>
      {beatmaps.map((x) => <Score key={x.id} data={{ cover: x.cover, rank: x.rank }} /> )}
    </ListContainer>
  );
}

export default ScoresList;
