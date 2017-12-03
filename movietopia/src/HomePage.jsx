import React, {Component} from 'react';
import FooterBar from './FooterBar';
import './index.css';

class HomePage extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <div className="hp-head">
                    <div className="hp-title">
                        <p>Movietopia</p>
                        <button onClick={this.props.submit}>Login / Sign Up</button>
                    </div>
                    <FooterBar/>
                </div>
            </div>
        );
    }
}

export default HomePage;