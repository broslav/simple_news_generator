import React from 'react';

export const NewsItem = (props) => {
    return (
        <li className="news__item item">
            <a className="item__link" href={props.url} target="_blank">
                <div className="item__logo-holder">
                    <img src={props.publisher_logo_url} alt="" className="item__logo"/>
                </div>
                <div className="announce">{props.announce}</div>
            </a>
        </li>
    )
};