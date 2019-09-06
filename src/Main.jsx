import React from 'react';
import svg from './assets/images/logo.jpg'

import race from './assets/images/race.png'
import Faq from './components/Faq';

export default function() {
    return (
            <div role="banner">
                <div class="main-content">
               
                
                    <a class="logo" href="/">
                        <img src={svg} width="100%"/>
                    </a>
                    <div>
                        <img src={race} width="100%"/>
                        <h2>Cardiff Half Marathon</h2>
                        <h4>October 6, 2019</h4>
                    </div>
                    <hr/>
                    <div>
                        <h3>Health &amp; Safety</h3>
                        <ul>
                            <li>Keep an eye on the weather and wear appropriate clothing
                            </li>
                            <li>
                                Make sure to stretch before and after the race
                            </li>
                        </ul>
                        </div>
                        <hr/>
                    <div>
                        <ul class="square">
                            <li >
                                <div class="itinerary-item">
                                    <div>Pre-race Photo</div>
                                    <div><a class="desc-link">Prostate Cancer Marquee #2563</a></div>
                                    <div class="time">8:00</div>
                                </div>
                            </li>
                            <li>
                                <div class="itinerary-item">
                                    <div>Start Race</div>
                                    <div><a class="desc-link">Race Starting Line</a></div>
                                    <div class="time">9:00</div>
                                </div>
                            </li>
                            <li>
                                <div class="itinerary-item">
                                    <div>Wave at cheer point</div>
                                    <div><a class="desc-link">Mile 6 marker</a></div>
                                    <div class="time">10:30</div>
                                </div>
                            </li>
                            <li>
                                <div class="itinerary-item">
                                    <div>Finish Race</div>
                                    <div><a class="desc-link">Finishing Line</a></div>
                                    <div class="time">16:00</div>
                                </div>
                            </li>
                            <li>
                                <div class="itinerary-item">
                                    <div>Post-race Reception</div>
                                    <div><a class="desc-link">Tiny Rebel Cardiff</a></div>
                                    <div class="time">17:00-19:00</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <Faq />
                
            </div>
       
    )
}