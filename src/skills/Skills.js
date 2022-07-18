import React from 'react';
import s from './Skills.module.css';
import sContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <div className={s.blockTitle}>
                    <div className={s.lineBefore}></div>
                    <h2 className={s.title}>SKILLS</h2>
                    <div className={s.lineAfter}></div>
                </div>
                <div className={s.skills}>
                    <Skill title={'Javascript'} description={'Web design is a similar process of creation, with the intention of presenting...'}/>
                    <Skill title={'React'} description={'Web design is a similar process of creation, with the intention of presenting...'}/>
                    <Skill title={'Redux'} description={'Web design is a similar process of creation, with the intention of presenting...Web design is a similar process of creation, with the intention of pres'}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;