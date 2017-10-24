import React from 'react'
import fetch from 'isomorphic-unfetch'

export default class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            episodes: []
        }
        this.increteCount = this.increteCount.bind(this)
        this.fetchData = this.fetchData.bind(this)
        this.decreteCount = this.decreteCount.bind(this)
    }

    componentWillMount() {
        console.log('Test state')
        console.log(this.props)
    }

    increteCount() {
        this.setState({ count: this.state.count+1 })
        this.fetchData(this.state.count+1)
    }

    decreteCount() {
        if(this.state.count > 0) {
            this.setState({ count: this.state.count - 1})
            this.fetchData(this.state.count - 1)
        }
    }

    async fetchData(index) {
        const res = await fetch(`http://api.tvmaze.com/shows/${index? index:this.state.count}/episodes`)
        let data = await res.json()
        if(data.status === 404) {
            data = []
        }
        this.setState({
            episodes: data
        })
    }

    render() {
        return (
            <div>
                This is Test component
                <p>Count: {this.state.count}</p>
                <button type="button" onClick={this.increteCount}>+</button>
                <button type="button" onClick={this.decreteCount}>-</button>

                <h3>Animation Type</h3>
                <ul>
                    { this.props.shows.filter(i => i.type === 'Animation').map( item => (
                        <li key={item.id}>
                            <div>Name: {item.name}</div>
                        </li>
                    ))}
                </ul>
                    <hr/>
                <h3>Get Episodes</h3>
                <ul>
                    { this.state.episodes.map(item => (
                        <li key={item.id}>{ item.name }</li>
                    ))}
                </ul>
            </div>
        )
    }
}

