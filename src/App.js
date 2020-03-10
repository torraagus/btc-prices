import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { PizzaCard } from './components/PizzaCard';
import { Confirmation } from './components/Confirmation';
import pizzas from './data';
//import CurrencyTable from './components/currencyTable'

/*import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';*/

/*<CurrencyTable currency='USD' />
<CurrencyTable currency='AUD' />
<CurrencyTable currency='JPY' />
<CurrencyTable currency='RUB' />*/

function App() {

  const[ordered, setOrdered] = useState(false);

  function displayConfirmation() {
    setOrdered(true);

    setTimeout(() => {
      setOrdered(false)
    }, 3000);
  }

  return (
      <Container>
        {ordered && <Confirmation toggle={setOrdered} />}
        <Row>
          {pizzas.map(data => (
            <Col xs={3} className="mb-5" key={`${data.id}`}>
              <PizzaCard data={data} setOrdered={displayConfirmation}></PizzaCard>
            </Col>
          ))}
        </Row>
      </Container>  
    )
}

export default App;
