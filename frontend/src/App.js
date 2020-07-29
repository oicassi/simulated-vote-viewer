import React, { useEffect, Fragment, useState } from 'react';
import Header from './components/Header';
import Spinner from './components/Spinner';
import Candidates from './components/Candidates';

export default function App() {

  const [candidates, setCandidates] = useState([]);
  const [previousVotes, setPreviousVotes] = useState([]);
  const [previousPercs, setPreviousPercs] = useState([]);

  useEffect(() => {
      const interval = setInterval(async () => {
      try {
        let resp = await fetch('http://localhost:8080/votes');
        let json = await resp.json();

        const previousVotes = candidates.map(({ id, votes }) => { return { id, votes } })
        const previousPercs = candidates.map(({ id, percentage }) => { return { id, percentage } })
        setCandidates(json.candidates);
        setPreviousVotes(previousVotes);
        setPreviousPercs(previousPercs);
      } catch (err) {
        console.log('Ocorreu erro no fetch');
        console.log(err.message);
      }
    }, 1000);

    return () => {
      clearInterval(interval)
    }
  }, [candidates]);

  if (candidates.length === 0) {
    // Se ainda não houverem elementos em candidates
    return (
      <Fragment>
        <div className="container">
          <Header>Votação </Header>
          <Spinner description="Carregando..." />
        </div>
      </Fragment>
    )
  }

  // Quando já existir elementos em candidates
  return (
    <Fragment>
      <div className="container" style={{ width: '50%' }}>
        <Header>Votação </Header>
        <Candidates candidates={candidates} previousVotes={previousVotes} previousPercs={previousPercs} />
      </div>
    </Fragment>
  )
}
