import React, { PureComponent } from 'react';


export default class Faq extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
    }


    clickHandler = (index) => {
        if (this.state.selected === index) {
            return this.setState({
                selected: null
            });
        }
        this.setState({selected: index})
    }

    render() {
        return (
            <div class="faq-section">
                <div class="faq-header">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <ul class="faq-list">
                    <li className={this.state.selected === 1 ? "active" : "" } onClick={() => this.clickHandler(1)}>
                        <div>
                            Didn't Recieve Pack?
                        </div>
                        {this.state.selected === 1 && <div class="answer">
                        Please contact the race organiser via... as they are responsible for this or find the info desk in race village.
                        </div> }
                    </li>
                    <li className={this.state.selected === 2 ? "active" : "" } onClick={() => this.clickHandler(2)}>
                        <div>
                            Can I Change My Top?
                        </div>
                        {this.state.selected === 2 && <div class="answer">
                        We have some tops with us on the day. Come to the pre-race photo / our marquee.
                        </div> }
                    </li>
                    <li className={this.state.selected === 3 ? "active" : "" } onClick={() => this.clickHandler(3)}>
                        <div>
                            When/Where Is The Post Race Reception?
                        </div>
                        {this.state.selected === 3 && <div class="answer">
                        We'd love to see you at our marquee in the race village from 2-5pm for a drink.
                        </div> }
                    </li>
                    <li className={this.state.selected === 4 ? "active" : "" } onClick={() => this.clickHandler(4)}>
                        <div>
                            Where Is The Cheerpoint?
                        </div>
                        {this.state.selected === 4 && <div class="answer">
                        We'll be cheering you on at mile 6! Keep an eye out and make sure your supporters join us
                        </div> }
                    </li>
                    <li className={this.state.selected === 5 ? "active" : "" } onClick={() => this.clickHandler(5)}>
                        <div>
                            Can I Bring People To The Post Race
                        </div>
                        {this.state.selected === 5 && <div class="answer">
                        Of course! Everyone is welcome but note that food will be for runners only
                        </div> }
                    </li>
                </ul>
            </div>
        );
    }
}