import React from 'react';
import s from './Skills.module.css';
import sContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My skills</h2>
                <div className={s.skills}>
                    <Skill title={'Javascript'} description={'Web design is a similar process of creation, with the intention of presenting...'}/>
                    <Skill title={'React'} description={'Web design is a similar process of creation, with the intention of presenting...'}/>
                    <Skill title={'Redux'} description={'Web design is a similar process of creation, with the intention of presenting...'}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;