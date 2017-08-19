import React, {Component} from 'react';

import {SourceItem}from './SourceItem';

import {getSources} from '../api/api';

export class Sources extends Component {

    constructor(props) {
        super(props);

        this.state = {sources: null};

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        getSources().then(blockProps => {
            this.setState({...this.state, sources: blockProps.publishers});
        });
    }

    handleScroll() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const sources = this.state.sources;

        if (!sources) {
            return (
                <div>
                    Loading...
                </div>
            )
        }

        return (
            <div className="sources">
                <ul className="sources__list">
                    {
                        sources.map(source => (
                            <SourceItem key={source.id} {...source}/>
                        ))}
                </ul>
            </div>
        )
    }
}