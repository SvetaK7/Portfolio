import React from 'react';
import s from "./Contacts.module.css";
import sContainer from './../common/styles/Container.module.css'

function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container}`}>
                    <div className={s.blockTitle}>
                        <div className={s.lineBefore}></div>
                        <h2 className={s.title}>CONTACTS</h2>
                        <div className={s.lineAfter}></div>
                    </div>
                    <div className={s.allContacts}>
                        <div className={s.formContainer}>
                            <h3>Get in touch</h3>
                            <form className={s.formContacts}>
                                <input placeholder={'Name'}/>
                                <input placeholder={'Email'}/>
                                <textarea placeholder={'Message'}></textarea>
                            </form>
                            <button className={s.buttonSend}>Send message</button>
                        </div>
                        <div className={s.myContacts}>
                            <h3>My contacts</h3>
                            <div className={s.location}>
                                <img/>
                                <p>Belarus, Minsk</p>
                            </div>
                            <div className={s.phone}>
                                <img/>
                                <div>
                                    <p>Phone:</p>
                                    <p>+375 33 649 59 47</p>
                                </div>
                            </div>
                            <div className={s.email}>
                                <img/>
                                <div>
                                    <p>Email:</p>
                                    <p>atevs7@inbox.ru</p>
                                </div>

                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Contacts;