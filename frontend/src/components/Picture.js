import React from 'react'
import css from './picture.module.css'
export default function Picture({imgSource, desc}) {
    return (
        <div>
            <img
            className={css.picture}
            src={imgSource}
            alt={desc}
            title={desc}/>
        </div>
    )
}
