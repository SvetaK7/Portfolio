import React from 'react';
import s from './Nav.module.css';
import sContainer from './../common/styles/Container.module.css'

function Nav(){
    return (
        <div className={`${sContainer.container} ${s.containerNav}`}>
            <div className={s.nav}>
                <a href=''>Home</a>
                <a href=''>Skills</a>
                <a href=''>Projects</a>
                <a href=''>Contacts</a>

            </div>
        </div>

    )
}

export default Nav;