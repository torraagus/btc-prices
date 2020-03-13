import React, { Component } from 'react';
import '../styles/Currencies.scss';
import { Currency } from '../models/Currency';
import { Grid, Row, Col } from 'react-flexbox-grid';

const URL = 'https://blockchain.info/ticker';

export default class Currencies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [], // Arreglo de las denominaciones de las monedas
      index: -1, // Es el indice de la moneda seleccionada
      data: [Currency] // Arreglo de objetos moneda
    };
    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState((state) => ({
      index: index
    }));
  }

  componentWillMount() {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({ currencies: Object.keys(response) });
        this.setState({ data: Object.values(response) });
        console.log(this.state);
      });
  }

  render() {
    let i = this.state.index;
    return (
      <>
        <Grid fluid>
          <Row center="xs">
            <Col lg={6} md={8} sm={10} xs={12}>
              {this.state.currencies.map((currency, i) => (
                <button
                  className="currencies"
                  key={`${currency}`}
                  onClick={() => {
                    this.handleClick(i);
                  }}
                >
                  {currency}
                </button>
              ))}
            </Col>
          </Row>
        </Grid>
        <Grid fluid className="mt-4">
          <Row center="xs">
            <Col lg={6} md={8} sm={10} xs={12}>
              {i > -1 && (
                <p className="mt-3 mb-0">
                  1BTC(₿) =
                  <b className="price ml-1">
                    {this.state.data[i].last}({this.state.data[i].symbol})
                  </b>
                </p>
              )}
            </Col>
          </Row>
        </Grid>
        {i > -1 && (
          <Grid fluid>
            <Row center="xs">
              <Col lg={6} md={8} sm={10} xs={12}>
                <span>
                  Last: <b>{this.state.data[i].last}</b>
                </span>
                <span className="ml-2">
                  Buy: <b>{this.state.data[i].buy}</b>
                </span>
                <span className="ml-2">
                  Sell: <b>{this.state.data[i].sell}</b>
                </span>
                <span className="ml-2">
                  Symbol: <b>{this.state.data[i].symbol}</b>
                </span>
              </Col>
            </Row>
          </Grid>
        )}
      </>
    );
  }
}
