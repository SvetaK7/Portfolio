import React from 'react';
import s from './projects.module.css';
import sContainer from './../common/styles/Container.module.css'
import Project from "./project/Project";

function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <div className={s.blockTitle}>
                    <div className={s.lineBefore}></div>
                    <h2 className={s.title}>PROJECTS</h2>
                    <div className={s.lineAfter}></div>
                </div>
                <div className={s.projects}>
                    <Project title={'Todolist'}
                             description={'List of tasks for each on the react and typescript. List of tasks for each on the react and typescript.'}/>
                    <Project title={'Social Network'} description={'Social Network created of React and typescript'}/>
                    <Project title={'Counter'} description={'Simple counter created of React and TypeScript'}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;