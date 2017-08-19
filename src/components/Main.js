import React, {Component} from 'react';
import {NewsItem} from './NewsItem';

import {getArticles} from '../api/api'

export class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            articles: null,
            topicList: [],
            filter_articles: [],
            filter_publishers: [],
            newsCount: 30
        };


        this.handleScroll = this.handleScroll.bind(this);

    }

    handleScroll() {

        if (this.articlesPromise) return;

        const elemHeight = this.content.scrollHeight;
        const elemScroll = this.content.scrollTop + this.content.offsetHeight;

        if (elemHeight === elemScroll) {
            console.log('bottom');
            this.articlesPromise = getArticles((this.state.newsCount + 30), this.state.filter_articles)
                .then(articles => {
                    let arrayOfIds = [],
                        topicList = [];

                    articles.map(article => {
                        if (this.state.filter_articles.indexOf(article.id) > 0) {
                            return
                        }
                        arrayOfIds.push(article.id);
                    });

                    this.setState({
                        ...this.state,
                        articles: articles,
                        filter_articles: arrayOfIds,
                        newsCount: this.state.newsCount + 30
                    });
                })
                .catch((err) => {
                    console.warn(err);
                })
                .then(() => this.articlesPromise = null);
        }
    }

    componentDidMount() {

        getArticles().then(articles => {
            this.setState({...this.state, articles});

            let arrayOfIds = [];

            for (let i = 0; i < articles.length; i++) {
                arrayOfIds.push(articles[i]['id']);
            }

            this.setState({
                ...this.state,
                articles: articles,
                filter_articles: arrayOfIds,
            });
        });

        window.addEventListener('scroll', () => {
            if(!this.content) return;

            this.handleScroll();
        }, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }


    render() {

        const articles = this.state.articles,
            topicFilter = this.props.topicFilter;

        if (!articles) {
            return (
                <div>
                    Loading...
                </div>
            )
        }


        return (
            <div className="content news" ref={(content) => this.content = content}>
                <ul className="news__list">
                    {
                        articles.map(article => {
                            if (topicFilter === article.topic_name || topicFilter === '') {
                                return <NewsItem key={article.id} {...article}/>
                            }
                        })}
                </ul>
            </div>
        )
    }
}