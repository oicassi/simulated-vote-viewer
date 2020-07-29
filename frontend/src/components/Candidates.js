import React, { Fragment } from 'react';
import Card from './Card';
import Candidate from './Candidate';
import css from './candidates.module.css';
import FlipMove from 'react-flip-move';
export default function Candidates({ candidates, previousVotes, previousPercs }) {
    return (
        <Fragment>
            <div className={css.containerCandidates}>
                <FlipMove>
                    {candidates.map((candidate, index) => {
                        const { id } = candidate;
                        const previousVoteObj = previousVotes.find((obj) => obj.id === candidate.id);
                        const previousPercObj = previousPercs.find((obj) => obj.id === candidate.id);
                        const previousVote = !!previousVoteObj ? previousVoteObj.votes : 0;
                        const previousPerc = !!previousPercObj ? previousPercObj.percentage : 0;
                        return (
                            <div key={id}>
                            <Card>
                                <Candidate previousVote={previousVote} previousPerc={previousPerc} candidate={candidate} position={index + 1} />
                            </Card>
                            </div>
                        )
                    })}
                </FlipMove>
            </div>
        </Fragment>
    )
}
