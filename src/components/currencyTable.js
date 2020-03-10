import React from 'react'
import Currency from './currency'

export default class CurrencyTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currency: '',
        }
    }

    componentWillMount() {
        this.setState({currency: this.props.currency})
    }

    render() {
        if (this.state.currency) {
        return <div>
            <h2>{this.state.currency}</h2>
            <Currency currKey={this.state.currency} />
        </div>
        }
        return <p>Cargando tabla...</p>
    }

}
