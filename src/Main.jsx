import React from 'react';
import svg from './assets/images/logo.jpg'

import race from './assets/images/race.png'


export default function() {
    return (
        <header class="primary">
            <div role="banner">
                <div class="secondary-container">

                </div>
                <div class="logo-phone-search">
                    <a class="logo" href="/">
                        <img src={svg} width="300px"/>
                    </a>
                    <div>
                        <img src={race} width="300px"/>
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
                                Pre-race Photo
                                Pre-race Photo
                                Pre-race Photo
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    )
}