import React, { useState } from 'react';

const apiURL = "https://672818c6270bd0b97554511a.mockapi.io/api/t1/players";

function PlayerForm({ fetchPlayers }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [careerStart, setCareerStart] = useState('');
  const [careerEnd, setCareerEnd] = useState('');

  const addPlayer = async () => {
    const newPlayer = {
      name,
      position,
      career_start: careerStart,
      career_end: careerEnd,
    };

    try {
      await fetch(apiURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPlayer),
      });
      fetchPlayers();
      clearForm();
    } catch (error) {
      console.error('선수 추가 중 오류 발생:', error);
    }
  };

  const clearForm = () => {
    setName('');
    setPosition('');
    setCareerStart('');
    setCareerEnd('');
  };

  return (
    <div>
      <h2>선수 추가</h2>
      <input type="text" value={name} placeholder="이름" onChange={e => setName(e.target.value)} />
      <input type="text" value={position} placeholder="포지션" onChange={e => setPosition(e.target.value)} />
      <input type="number" value={careerStart} placeholder="경력 시작" onChange={e => setCareerStart(e.target.value)} />
      <input type="number" value={careerEnd} placeholder="경력 종료" onChange={e => setCareerEnd(e.target.value)} />
      <button onClick={addPlayer}>Add Player</button>
    </div>
  );
}

export default PlayerForm;
