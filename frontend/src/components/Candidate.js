import React from 'react'
import Position from './Position';
import Picture from './Picture';
import Info from './Info';
import Name from './Name';
import Votes from './Votes';
import Percentage from './Percentage';
import Popularity from './Popularity';
import css from './candidate.module.css'
export default function Candidate({ candidate, position, previousVote, previousPerc }) {
    const { id, name, votes, percentage, popularity } = candidate;

    const imgSource = `${id}.jpg`
    return (
        <div className={css.flexRow}>
            <Position>{position}</Position>
            <Picture imgSource={imgSource} desc={name} />
            <Info>
                <Name>{name}</Name>
                <Votes value={votes} count={previousVote}/>

                <Percentage previous={previousPerc} value={percentage} />
                
                <Popularity value={popularity}/>
            </Info>
        </div>
    )
}
