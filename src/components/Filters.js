import React from 'react';

export class Filters extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.topics = ['Все новости', 'Жизнь', 'Общество', 'Жёлтые'];
    }

    handleClick(e) {
        this.props.setTopic(e.target.attributes.data.value);

        this.topics.map(topic => {
            const target = e.target,
                li = target.parentNode,
                ul = li.parentNode;

            if (topic === e.target.attributes.data.value || topic === 'Все новости') {

                const array = Array.from(ul.childNodes);

                array.map(item => item.classList.remove('active'));

                target.parentNode.classList.add('active');
            }
        });
    }

    render() {
        const topics = this.topics;

        return (
            <div className="filters">
                <ul className="filters__list">
                    {topics.map((topic, index) => {
                        if (topic === 'Все новости') {
                            return (<li key={index} className="filters__item active">
                                    <button
                                        className="filters__button"
                                        onClick={this.handleClick}
                                        data="">Все новости
                                    </button>
                                </li>
                            )
                        }
                        return (
                            <li key={index} className="filters__item">
                                <button
                                    className="filters__button"
                                    onClick={this.handleClick}
                                    data={topic}>{topic}
                                </button>
                            </li>
                        )
                    })}

                </ul>
            </div>
        )
    }
}