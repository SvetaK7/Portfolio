import React from 'react';
import s from './Main.module.css';
import sContainer from './../common/styles/Container.module.css'

function Main(){
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.mainPhoto}></div>
                <div className={s.descriptionText}>
                    <h3>Hi! I'm Svetlana Kozlova</h3>
                    <p>Frontend Developer (React Developer)</p>
                </div>
            </div>
        </div>
    )
}

export default Main;