import React from 'react';
import s from './Project.module.css'

function Project(props) {
    return (
        <div className={s.project}>
            <div className={s.icon}></div>
            <div className={s.information}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>

        </div>
    )
}

export default Project;