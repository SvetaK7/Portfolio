import React from 'react';
import s from './Main.module.css';
import sContainer from './../common/styles/Container.module.css';
import myPhoto from './img/iam.jpg'
import gift from './../assets/image/gift.png'
import calendar from './../assets/image/calendar.png'
import location from './../assets/image/location.png'
import games from './../assets/image/games.png'
import study from './../assets/image/study.png'
import language from './../assets/image/language.png'
import email from './../assets/image/email.png'
import phone from './../assets/image/phone.png'

function Main(){
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.aboutMeInformation}>
                    <div className={s.mainPhoto}>
                        <img src={myPhoto} alt={'my photo'}/>
                    </div>
                    <div className={s.aboutMeWrap}>
                        <div className={s.descriptionText}>
                            <h2>A LITTLE ABOUT ME</h2>
                            <p>Hi! My name is Sveta Kozlova. I am a Web Developer and I enjoy it. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi debitis deleniti dicta illum ipsum iusto non placeat repellendus solut.</p>
                        </div>
                        <div className={s.aboutContactWrap}>
                            <div><img src={gift} width={'17px'} height={'17px'}/></div>
                            <div><p>Birdhday</p></div>
                            <div><p>28.08.1995</p></div>
                            <div><img src={calendar} width={'17px'} height={'17px'}/></div>
                            <div><p>Age</p></div>
                            <div><p>27</p></div>
                            <div><img src={location} width={'17px'} height={'17px'}/></div>
                            <div><p>Location</p></div>
                            <div><p>Minsk, Belarus</p></div>
                            <div><img src={games} width={'17px'} height={'17px'}/></div>
                            <div><p>Interests</p></div>
                            <div><p>Table tennis</p></div>
                            <div><img src={study} width={'17px'} height={'17px'}/></div>
                            <div><p>Study</p></div>
                            <div><p>BNTU</p></div>
                            <div><img src={language} width={'17px'} height={'17px'}/></div>
                            <div><p>Languages</p></div>
                            <div><p>Russian, English</p></div>
                            <div><img src={email} width={'17px'} height={'17px'}/></div>
                            <div><p>Email</p></div>
                            <div><p>atevs7@inbox.ru</p></div>
                            <div><img src={phone} width={'17px'} height={'17px'}/></div>
                            <div><p>Phone</p></div>
                            <div><p>+375 33 649 59 47</p></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Main;