import React, {Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//components import
import {Sidebar} from './components/Sidebar';
import {Sources} from './components/Sources';
import {Main} from './components/Main';
import {Header} from './components/Header';

export class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            topicFilter: ''
        };

        this.handleTopicChange = this.handleTopicChange.bind(this);

    }


    handleTopicChange(topicName) {
        this.setState({...this.state, topicFilter: topicName});
    }

    render() {
        return (
            <Router>
                <div className="main-wrapper">
                    <Header/>
                    <section className="main-section">
                        <Switch>
                            <Route path="/" render={(match) => {
                                return (
                                    <Sidebar topicList={this.state.topicList}
                                             setTopic={this.handleTopicChange}
                                             topicFilter={this.state.topicFilter}
                                             {...match.location}
                                    />
                                )
                            }}
                            />
                            <Route path="/sources" render={(match) => {
                                return (
                                    <Sidebar topicList={this.state.topicList}
                                             setTopic={this.handleTopicChange}
                                             topicFilter={this.state.topicFilter}
                                             {...match.location}
                                    />
                                )
                            }}
                            />
                        </Switch>
                        <div className="content-wrapper">
                            <Switch>
                                <Route exact path="/" render={() => <Main topicFilter={this.state.topicFilter}/>}/>
                                <Route exact path="/sources" component={Sources}/>
                            </Switch>
                        </div>
                    </section>
                </div>
            </Router>
        )
    }
}

