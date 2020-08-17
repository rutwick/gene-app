import React from 'react';
import './banner.css';

const Banner = (props) => {
    return (<div className="banner" onClick={props.onClick}>
                <p className="marquee">
                    <span>Sign up here.</span>
                </p>
                <p className="marquee marquee2">
                    <span>Sign up here.</span>
                </p>
            </div>);
}

export default Banner;