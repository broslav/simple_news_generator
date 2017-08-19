import React from 'react';

export const SourceItem = (props) => {
    return (
        <li className="source__item source">
            <a className="source__link" href={`//${props.domain}`} target="_blank">
                <div className="source__logo-holder">
                    <img src={props.logo_url} alt="" className="item__logo"/>
                </div>
                <div className="source__name">{props.name}</div>
            </a>
        </li>
    )
};
