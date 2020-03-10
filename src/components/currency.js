import React, { Component } from 'react'

export default class Currency extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            last: 0,
            buy: 0,
            sell: 0,
            symbol: ''
        }
    }

    componentWillMount() {
        //fetch('https://blockchain.info/tobtc?currency=USD&value=500')
        fetch('https://blockchain.info/ticker')
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            var map = new Map(Object.entries(response));
            return map.get(this.props.currKey);
        })
        .then((currency) => {
            this.setState({last: currency.last})
            this.setState({buy: currency.buy})
            this.setState({sell: currency.sell})
            this.setState({symbol: currency.symbol})
        })
    }

    render() {
        if (this.state.last === 0) {
            return <p>Cargando datos...</p>
        }
        return (
            <div>
                <p>Last: <b>{this.state.last}</b></p>      
                <p>Buy: <b>{this.state.buy}</b></p>      
                <p>Sell: <b>{this.state.sell}</b></p>      
                <p>Symbol: <b>{this.state.symbol}</b></p>      
            </div>
        )
    }
}
